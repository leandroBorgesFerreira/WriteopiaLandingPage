package com.storiesteller.sdk.drawer.content

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Checkbox
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.LocalMinimumInteractiveComponentEnforcement
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.focus.onFocusChanged
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.text.TextRange
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.storiesteller.sdk.draganddrop.target.DragTargetWithDragItem
import com.storiesteller.sdk.drawer.DrawInfo
import com.storiesteller.sdk.drawer.StoryStepDrawer
import com.storiesteller.sdk.drawer.modifier.callOnEmptyErase
import com.storiesteller.sdk.model.action.Action
import com.storiesteller.sdk.model.draganddrop.DropInfo
import com.storiesteller.sdk.model.story.StoryTypes
import com.storiesteller.sdk.models.story.StoryStep
import com.storiesteller.sdk.text.edition.TextCommandHandler
import com.storiesteller.sdk.uicomponents.SwipeBox

/**
 * Check item drawer. Draws a check box followed by a text.
 */
class CheckItemDrawer(
    private val modifier: Modifier = Modifier,
    private val onCheckedChange: (Action.StoryStateChange) -> Unit = {},
    private val onTextEdit: (String, Int) -> Unit = { _, _ -> },
    private val onDeleteRequest: (Action.DeleteStory) -> Unit = {},
    private val onSelected: (Boolean, Int) -> Unit = { _, _ -> },
    private val commandHandler: TextCommandHandler = TextCommandHandler(emptyMap()),
    private val customBackgroundColor: Color? = null,
    private val clickable: Boolean = true
) : StoryStepDrawer {

    @OptIn(ExperimentalMaterial3Api::class)
    @Composable
    override fun Step(step: StoryStep, drawInfo: DrawInfo) {
        val fontSize = 16.sp

        val dropInfo = DropInfo(step, drawInfo.position)
        val focusRequester = remember { FocusRequester() }
        var hasFocus by remember { mutableStateOf(false) }
        var showDragIcon by remember { mutableStateOf(false) }

        var inputText by remember {
            val text = step.text ?: ""
            mutableStateOf(TextFieldValue(text, TextRange(text.length)))
        }

        val textStyle = if (step.checked == true) {
            TextStyle(
                textDecoration = TextDecoration.LineThrough,
                color = MaterialTheme.colorScheme.onBackground,
                fontSize = fontSize
            )
        } else {
            TextStyle(
                color = MaterialTheme.colorScheme.onBackground,
                fontSize = fontSize
            )
        }

        LaunchedEffect(drawInfo.focusId) {
            if (drawInfo.focusId == step.id) {
                focusRequester.requestFocus()
            }
        }

        SwipeBox(
            modifier = modifier
                .apply {
                    if (clickable) {
                        clickable {
                            focusRequester.requestFocus()
                        }
                    }
                },
            defaultColor = customBackgroundColor ?: MaterialTheme.colorScheme.background,
            activeColor = MaterialTheme.colorScheme.primary,
            state = drawInfo.selectMode,
            swipeListener = { isSelected ->
                onSelected(isSelected, drawInfo.position)
            }
        ) {
            DragTargetWithDragItem(
                dataToDrop = dropInfo,
                showIcon = showDragIcon,
                position = drawInfo.position,
                emptySpaceClick = focusRequester::requestFocus
            ) {
                CompositionLocalProvider(
                    LocalMinimumInteractiveComponentEnforcement provides false
                ) {
                    Checkbox(
                        modifier = Modifier.padding(6.dp),
                        checked = step.checked ?: false,
                        onCheckedChange = { checked ->
                            onCheckedChange(
                                Action.StoryStateChange(
                                    step.copy(checked = checked),
                                    drawInfo.position
                                )
                            )
                        },
                        enabled = drawInfo.editable,
                    )
                }

                BasicTextField(
                    modifier = Modifier
                        .focusRequester(focusRequester)
                        .weight(1F)
                        .onFocusChanged { focusState ->
                            hasFocus = focusState.hasFocus
                        }
                        .callOnEmptyErase(inputText.selection) {
                            onDeleteRequest(Action.DeleteStory(step, drawInfo.position))
                        }
                        .onFocusChanged { focusState ->
                            showDragIcon = focusState.hasFocus
                        },
                    value = inputText,
                    onValueChange = { value: TextFieldValue ->
                        if (!commandHandler.handleCommand(
                                value.text,
                                step,
                                drawInfo.position
                            )
                        ) {
                            inputText = value
                            onTextEdit(value.text, drawInfo.position)
                        }
                    },
                    textStyle = textStyle,
                    enabled = drawInfo.editable,
                    keyboardOptions = KeyboardOptions(
                        capitalization = KeyboardCapitalization.Sentences
                    ),
                    cursorBrush = SolidColor(MaterialTheme.colorScheme.primary)
                )
            }
        }
    }
}

@Preview
@Composable
fun CheckItemDrawerStepPreview() {
    CheckItemDrawer().Step(
        step = StoryStep(
            type = StoryTypes.CHECK_ITEM.type,
            text = "This is a check item"
        ),
        drawInfo = DrawInfo()
    )
}