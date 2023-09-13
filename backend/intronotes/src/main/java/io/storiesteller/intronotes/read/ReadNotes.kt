package io.storiesteller.intronotes.read

import io.storiesteller.intronotes.extensions.toAPi
import io.storiesteller.intronotes.persistence.entity.DocumentEntity
import io.storiesteller.sdk.serialization.json.storiesTellerJson
import io.storiesteller.sdk.serialization.request.wrapInRequest
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

internal fun readNotes(
    json: Json = storiesTellerJson,
    provideNote: () -> DocumentEntity,
): String =
    listOf(provideNote())
        .map { documentEntity ->
            documentEntity.toAPi()
        }.let { introNotes ->
            json.encodeToString(introNotes.wrapInRequest())
        }
