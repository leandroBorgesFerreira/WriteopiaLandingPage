package com.storiesteller.intronotes.unit

import com.storiesteller.intronotes.input.ParseInput
import com.storiesteller.intronotes.unit.utils.Samples
import org.junit.Assert.*
import org.junit.Test

class ParseInputTest {

    @Test
    fun `parse should happen correctly`() {
        val id = "fakeId"

        val input = Samples.sampleEntity(id, "title")
        val documentEntity = ParseInput.parse(input)

        assertEquals(id, documentEntity.id)
        assertEquals(5, documentEntity.content!!.size)
    }
}