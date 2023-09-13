package io.storiesteller.sdk.persistence.entity.document

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.time.Instant

internal const val DOCUMENT_ENTITY: String = "DOCUMENT_ENTITY_TABLE"

internal const val TITLE: String = "title"
internal const val CREATED_AT: String = "created_at"
internal const val LAST_UPDATED_AT: String = "last_updated_at"
internal const val USER_ID: String = "user_id"

@Entity(tableName = DOCUMENT_ENTITY)
data class DocumentEntity(
    @PrimaryKey val id: String,
    @ColumnInfo(TITLE) val title: String,
    @ColumnInfo(CREATED_AT) val createdAt: Instant,
    @ColumnInfo(LAST_UPDATED_AT) val lastUpdatedAt: Instant,
    @ColumnInfo(USER_ID) val userId: String,
) {
    companion object {
        fun createById(id: String, userId: String): DocumentEntity = DocumentEntity(
                id,
            "",
            Instant.now(),
            Instant.now(),
            userId
        )
    }
}