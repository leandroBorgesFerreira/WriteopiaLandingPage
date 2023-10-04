package io.writeopia.sdk.drawer.content

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import io.writeopia.sdk.drawer.StoryStepDrawer
import io.writeopia.sdk.manager.WriteopiaManager
import io.writeopia.sdk.model.action.Action
import io.writeopia.sdk.models.command.CommandInfo
import io.writeopia.sdk.models.story.StoryType
import io.writeopia.sdk.models.story.StoryTypes
import io.writeopia.sdk.text.edition.TextCommandHandler
import io.writeopia.sdk.utils.ui.defaultTextStyle

object DefaultDrawersDesktop {

    @Composable
    fun create(
        manager: WriteopiaManager,
        defaultBorder: Shape = MaterialTheme.shapes.medium,
        editable: Boolean = false,
        groupsBackgroundColor: Color = Color.Transparent,
        onHeaderClick: () -> Unit = {}
    ): Map<Int, StoryStepDrawer> =
        create(
            onTextEdit = manager::onTextEdit,
            onTitleEdit = manager::onTitleEdit,
            onLineBreak = manager::onLineBreak,
            moveRequest = manager::moveRequest,
            checkRequest = manager::changeStoryState,
            onDeleteRequest = manager::onDelete,
            changeStoryType = manager::changeStoryType,
            nextFocus = manager::nextFocusOrCreate,
            clickAtTheEnd = manager::clickAtTheEnd,
            onHeaderClick = onHeaderClick,
            onSelected = manager::onSelected,
            groupsBackgroundColor = groupsBackgroundColor,
            defaultBorder = defaultBorder,
            textCommandHandler = TextCommandHandler.defaultCommands(manager)
        )

    @Composable
    fun create(
        onTextEdit: (String, Int) -> Unit = { _, _ -> },
        onTitleEdit: (String, Int) -> Unit = { _, _ -> },
        onLineBreak: (Action.LineBreak) -> Unit = {},
        moveRequest: (Action.Move) -> Unit = {},
        checkRequest: (Action.StoryStateChange) -> Unit = {},
        onDeleteRequest: (Action.DeleteStory) -> Unit = {},
        changeStoryType: (Int, StoryType, CommandInfo?) -> Unit = { _, _, _ -> },
        onSelected: (Boolean, Int) -> Unit = { _, _ -> },
        clickAtTheEnd: () -> Unit = {},
        onHeaderClick: () -> Unit = {},
        defaultBorder: Shape = MaterialTheme.shapes.medium,
        groupsBackgroundColor: Color = Color.Transparent,
        textCommandHandler: TextCommandHandler,
        nextFocus: (Int) -> Unit = {}
    ): Map<Int, StoryStepDrawer> {
        val focusRequesterMessageBox = remember { FocusRequester() }

        val messageBoxDrawer = swipeMessageDrawer(
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .clip(shape = defaultBorder)
                .background(groupsBackgroundColor),
            focusRequester = focusRequesterMessageBox,
            onSelected = onSelected,
            messageDrawer = {
                DesktopMessageDrawer(
                    modifier = Modifier.weight(1F),
                    onTextEdit = onTextEdit,
                    focusRequester = focusRequesterMessageBox,
                    commandHandler = textCommandHandler,
                    onDeleteRequest = onDeleteRequest,
                )
            }
        )

        val focusRequesterSwipeMessage = remember { FocusRequester() }
        val swipeMessageDrawer = swipeMessageDrawer(
            modifier = Modifier.padding(horizontal = 12.dp),
            onSelected = onSelected,
            focusRequester = focusRequesterSwipeMessage,
            customBackgroundColor = Color.Transparent,
            messageDrawer = {
                DesktopMessageDrawer(
                    modifier = Modifier.weight(1F),
                    onTextEdit = onTextEdit,
                    focusRequester = focusRequesterSwipeMessage,
                    commandHandler = textCommandHandler,
                    onDeleteRequest = onDeleteRequest,
                )
            }
        )

        val createHDrawer = @Composable { fontSize: TextUnit ->
            val focusRequesterH = remember { FocusRequester() }
            swipeMessageDrawer(
                modifier = Modifier.padding(horizontal = 12.dp),
                onSelected = onSelected,
                focusRequester = focusRequesterH,
                customBackgroundColor = Color.Transparent,
                messageDrawer = {
                    DesktopMessageDrawer(
                        modifier = Modifier.weight(1F),
                        onTextEdit = onTextEdit,
                        textStyle = {
                            defaultTextStyle(it).copy(fontSize = fontSize)
                        },
                        focusRequester = focusRequesterH,
                        commandHandler = textCommandHandler,
                    )
                }
            )
        }

        val h1MessageDrawer = createHDrawer(28.sp)
        val h2MessageDrawer = createHDrawer(24.sp)
        val h3MessageDrawer = createHDrawer(20.sp)
        val h4MessageDrawer = createHDrawer(18.sp)

        val focusRequesterCheckItem = remember { FocusRequester() }
        val checkItemDrawer = checkItemDrawer(
            modifier = Modifier.padding(start = 18.dp, end = 12.dp),
            onCheckedChange = checkRequest,
            onSelected = onSelected,
            customBackgroundColor = Color.Transparent,
            focusRequester = focusRequesterCheckItem,
            messageDrawer = {
                DesktopMessageDrawer(
                    modifier = Modifier.weight(1F),
                    onTextEdit = onTextEdit,
                    focusRequester = focusRequesterCheckItem,
                    commandHandler = textCommandHandler,
                    onDeleteRequest = onDeleteRequest,
                    emptyErase = { position ->
                        changeStoryType(position, StoryTypes.MESSAGE.type, null)
                    },
                )
            },
        )

        val focusRequesterUnOrderedList = remember { FocusRequester() }
        val unOrderedListItemDrawer =
            unOrderedListItemDrawer(
                modifier = Modifier.padding(start = 18.dp, end = 12.dp),
                onSelected = onSelected,
                focusRequester = focusRequesterUnOrderedList,
                customBackgroundColor = Color.Transparent,
                messageDrawer = {
                    DesktopMessageDrawer(
                        modifier = Modifier.weight(1F),
                        onTextEdit = onTextEdit,
                        focusRequester = focusRequesterUnOrderedList,
                        commandHandler = textCommandHandler,
                        onDeleteRequest = onDeleteRequest,
                        emptyErase = { position ->
                            changeStoryType(position, StoryTypes.MESSAGE.type, null)
                        },
                    )
                },
            )

        val headerDrawer = HeaderDrawer(
            drawer = {
                TitleDrawer(
                    containerModifier = Modifier.align(Alignment.BottomStart),
                    onTextEdit = onTitleEdit,
                    onLineBreak = onLineBreak,
                )
            },
            headerClick = onHeaderClick
        )
        return buildMap {
            put(StoryTypes.MESSAGE_BOX.type.number, messageBoxDrawer)
            put(StoryTypes.MESSAGE.type.number, swipeMessageDrawer)
            put(StoryTypes.ADD_BUTTON.type.number, AddButtonDrawer())
            put(StoryTypes.SPACE.type.number, SpaceDrawer(moveRequest))
            put(StoryTypes.LARGE_SPACE.type.number, LargeEmptySpace(moveRequest, clickAtTheEnd))
            put(StoryTypes.CHECK_ITEM.type.number, checkItemDrawer)
            put(StoryTypes.UNORDERED_LIST_ITEM.type.number, unOrderedListItemDrawer)
            put(StoryTypes.TITLE.type.number, headerDrawer)
            put(StoryTypes.H1.type.number, h1MessageDrawer)
            put(StoryTypes.H2.type.number, h2MessageDrawer)
            put(StoryTypes.H3.type.number, h3MessageDrawer)
            put(StoryTypes.H4.type.number, h4MessageDrawer)
        }
    }
}