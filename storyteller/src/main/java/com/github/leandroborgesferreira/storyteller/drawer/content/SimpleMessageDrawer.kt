package com.github.leandroborgesferreira.storyteller.drawer.content

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.FocusState
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.TextRange
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.github.leandroborgesferreira.storyteller.drawer.DrawInfo
import com.github.leandroborgesferreira.storyteller.drawer.StoryStepDrawer
import com.github.leandroborgesferreira.storyteller.drawer.modifier.callOnEmptyErase
import com.github.leandroborgesferreira.storyteller.model.action.Action
import com.github.leandroborgesferreira.storyteller.model.story.StoryTypes
import com.github.leandroborgesferreira.storyteller.models.story.StoryStep
import com.github.leandroborgesferreira.storyteller.text.edition.TextCommandHandler

/**
 * Simple message drawer mostly intended to be used as a component for more complex drawers.
 */
class SimpleMessageDrawer(
    private val modifier: Modifier = Modifier,
    private val textModifier: Modifier = Modifier,
    private val textStyle: @Composable () -> TextStyle = { defaultTextStyle() },
    private val focusRequester: FocusRequester,
    private val onTextEdit: (String, Int) -> Unit = { _, _ -> },
    private val onDeleteRequest: (Action.DeleteStory) -> Unit = {},
    private val commandHandler: TextCommandHandler = TextCommandHandler(emptyMap()),
    var onFocusChanged: (FocusState) -> Unit = {}
) : StoryStepDrawer {

    @Composable
    override fun Step(step: StoryStep, drawInfo: DrawInfo) {
        Box(modifier = modifier) {
            if (drawInfo.editable) {
                var inputText by remember {
                    val text = step.text ?: ""
                    mutableStateOf(TextFieldValue(text, TextRange(text.length)))
                }

                LaunchedEffect(drawInfo.focusId) {
                    if (drawInfo.focusId == step.id) {
                        focusRequester.requestFocus()
                    }
                }

                BasicTextField(
                    modifier = textModifier
                        .focusRequester(focusRequester)
                        .callOnEmptyErase(inputText.selection) {
                            onDeleteRequest(Action.DeleteStory(step, drawInfo.position))
                        }
                        .onFocusChanged(onFocusChanged),
                    value = inputText,
                    onValueChange = { value ->
                        val text = value.text

                        inputText = if (text.contains("\n")) {
                            val newText = text.split("\n", limit = 2)[0]
                            TextFieldValue(newText, TextRange(newText.length))
                        } else {
                            value
                        }

                        onTextEdit(value.text, drawInfo.position)
                        commandHandler.handleCommand(text, step, drawInfo.position)
                    },
                    keyboardOptions = KeyboardOptions(
                        capitalization = KeyboardCapitalization.Sentences
                    ),
                    textStyle = textStyle(),
                    cursorBrush = SolidColor(MaterialTheme.colorScheme.primary)
                )
            } else {
                Text(
                    text = step.text ?: "",
                    modifier = Modifier.padding(vertical = 5.dp),
                )
            }
        }
    }
}

@Preview
@Composable
fun SimpleMessageDrawerPreview() {
    SimpleMessageDrawer(focusRequester = FocusRequester()).Step(
        step = StoryStep(text = "Some text", type = StoryTypes.MESSAGE.type),
        drawInfo = DrawInfo()
    )
}
