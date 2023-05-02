package br.com.leandroferreira.storyteller.drawer

import androidx.compose.runtime.Composable
import br.com.leandroferreira.storyteller.model.StoryUnit

/**
 * [StoryUnitDrawer] is the interface for drawing StoryUnits in the screen. It you would like
 * to support more types of StoryUnits are more implementation of this interface
 * to [StoryTellerTimeline]
 */
fun interface StoryUnitDrawer {
    @Composable
    fun Step(step: StoryUnit, editable: Boolean, extraData: Map<String, Any>)
}