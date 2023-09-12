plugins {
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.kotlinAndroid)
}

rootProject.extra.apply {
    set("PUBLISH_GROUP_ID", "com.storiesteller")
    set("PUBLISH_ARTIFACT_ID", "storiesteller-core")
    set("PUBLISH_VERSION", libs.versions.storiesteller.get())
}

apply(from = "${rootDir}/scripts/publish-module.gradle")

android {
    namespace = "com.storiesteller.sdk"
    compileSdk = 34

    defaultConfig {
        minSdk = 24

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        isCoreLibraryDesugaringEnabled = true
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = libs.versions.compose.compiler.get()
    }
    publishing {
        singleVariant("release")
    }
}

kotlin{
    sourceSets.all {
        languageSettings {
            languageVersion = "1.9"
        }
    }
}

dependencies {
    implementation(libs.androidx.material.icons.extended)
    // Coil
    implementation(libs.coil.compose)
    implementation(libs.coil.video)

    implementation(libs.androidx.ktx)

    coreLibraryDesugaring(libs.desugar.jdk.libs)

    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material3:material3-window-size-class")
    implementation(project(":storiesteller_models"))

    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)

    implementation("androidx.compose.ui:ui-tooling-preview")
    debugImplementation("androidx.compose.ui:ui-tooling")

    testImplementation(libs.junit)
    testImplementation(libs.kotlinx.coroutines.test)

    implementation(platform(libs.androidx.compose.bom))
}