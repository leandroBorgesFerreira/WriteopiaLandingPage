package io.storiesteller.intronotes.write

import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent
import io.storiesteller.intronotes.dynamo.introNotesTable
import io.storiesteller.intronotes.input.ParseInput
import io.storiesteller.intronotes.persistence.entity.DocumentEntity
import io.storiesteller.intronotes.persistence.repository.DynamoIntroNotesRepository
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbTable

fun writeIntroNotes(
    stringBody: String,
    loggerFn: (String) -> Unit,
    loggerErrorFn: (String) -> Unit,
    notesTable: DynamoDbTable<DocumentEntity> = introNotesTable()
): APIGatewayProxyResponseEvent =
    try {
        loggerFn("Received: $stringBody")
        val documentEntity = ParseInput.parse(stringBody)
        DynamoIntroNotesRepository.saveNote(documentEntity, notesTable)

        APIGatewayProxyResponseEvent()
            .withStatusCode(200)
            .withBody("Success")
    } catch (e: Exception) {
        loggerErrorFn("Failed to save notes. Message: ${e.message}")

        APIGatewayProxyResponseEvent()
            .withStatusCode(500)
            .withBody("An error occurred. Received request: $stringBody. Error: ${e.message}")
    }