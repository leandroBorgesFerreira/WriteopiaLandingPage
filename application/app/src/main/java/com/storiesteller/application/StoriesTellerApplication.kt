package com.storiesteller.application

import android.app.Application
import android.util.Log
import com.amplifyframework.AmplifyException
import com.amplifyframework.kotlin.core.Amplify
import com.storiesteller.sdk.video.VideoFrameConfig
import com.storiesteller.auth.core.AuthInitializer

class StoriesTellerApplication: Application() {

    override fun onCreate() {
        super.onCreate()
        VideoFrameConfig.configCoilForVideoFrame(this)

        try {
            AuthInitializer.initializeAwsAuth()
            Amplify.configure(applicationContext)
            Log.i("StoriesTellerApplication", "Initialized Amplify")
        } catch (error: AmplifyException) {
            Log.e("StoriesTellerApplication", "Could not initialize Amplify", error)
        }
    }
}