package io.storiesteller.sdk.persistence.parse

import io.storiesteller.sdk.model.story.StoryTypes
import io.storiesteller.sdk.models.story.Decoration
import io.storiesteller.sdk.models.story.StoryStep
import io.storiesteller.sdk.models.story.StoryType
import io.storiesteller.sdk.persistence.entity.story.StoryStepEntity

fun Map<Int, StoryStep>.toEntity(documentId: String): List<StoryStepEntity> =
    flatMap { (position, storyUnit) ->
        if (storyUnit.isGroup) {
            listOf(storyUnit.toEntity(position, documentId)) + storyUnit.steps.map { innerStory ->
                innerStory.copy(parentId = storyUnit.id).toEntity(position, documentId)
            }
        } else {
            listOf(storyUnit.toEntity(position, documentId))
        }
    }

fun StoryStepEntity.toModel(
    steps: List<StoryStepEntity> = emptyList(),
    nameToType: (String) -> StoryType = { typeName ->
        StoryTypes.fromName(typeName).type
    }
): StoryStep =
    StoryStep(
        id = id,
        localId = localId,
        type = nameToType(type),
        parentId = parentId,
        url = url,
        path = path,
        text = text,
        title = title,
        checked = checked,
        steps = steps.map { storyUnitEntity -> storyUnitEntity.toModel() },
        decoration = Decoration(
            backgroundColor = backgroundColor
        )
    )

fun StoryStep.toEntity(position: Int, documentId: String): StoryStepEntity =
    StoryStepEntity(
        id = id,
        localId = localId,
        type = type.name,
        parentId = parentId,
        url = url,
        path = path,
        text = text,
        title = title,
        checked = checked,
        position = position,
        documentId = documentId,
        isGroup = false,
        hasInnerSteps = this.steps.isNotEmpty(),
        backgroundColor = this.decoration.backgroundColor
    )