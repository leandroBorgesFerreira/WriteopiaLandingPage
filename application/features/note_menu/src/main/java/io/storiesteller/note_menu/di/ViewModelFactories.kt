package io.storiesteller.note_menu.di

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import io.storiesteller.auth.core.AuthManager
import io.storiesteller.note_menu.data.usecase.NotesConfigurationRepository
import io.storiesteller.note_menu.data.usecase.NotesUseCase
import io.storiesteller.note_menu.viewmodel.ChooseNoteViewModel

internal class ChooseNoteViewModelFactory(
    private val notesUseCase: NotesUseCase,
    private val notesConfig: NotesConfigurationRepository,
    private val authManager: AuthManager
) : ViewModelProvider.Factory {

    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(ChooseNoteViewModel::class.java)) {
            return ChooseNoteViewModel(notesUseCase, notesConfig, authManager) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}