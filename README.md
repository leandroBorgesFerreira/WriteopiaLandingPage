# StoryTeller - WIP

An SDK to create a editor for stories. 

This SDK allows you to create an editor for stories. You can use this library to create a better story editing experience within apps, such as social media (posts), travel logs, blog apps (like Medium), and chats (like Slack). By using this library, you can provide a great experience for editing text with media.

Rather than having to post all media separately and add an EditText feature, the library enables media and text to be combined in a story format. This allows for a more engaging and interactive experience for users. An example of an app created with this SDK is shown below.

https://user-images.githubusercontent.com/10619102/232607035-3be9444d-e66d-4e4f-a0f6-d557b63e8fcc.mov

## Quick start
[To do]

## Features

This SDK allows users to edit text by changing the position of the text and media, and provides ways to interact with the list (although drag and drop functionality is still to be implemented).

By providing `Drawers`, it is possible to control and customize the way information units are displayed on the screen. Using the `StepsNormalizers` and listening to user click events, it is possible to fully control how the `StoryTellerTimeline` behaves. The inputs can be changed to support many different use cases to suit any kind of app that needs an enhanced tool for creating user-generated content.

The following sections provide a detailed explanation of how each part of the SDK works and how to use it.

### Drawers

Those classes explain to `StoryTellerTimeline` how each type of information should be draw in the screen. Each drawer needs to be associated with its type, to get a plug and play experience you can use `DefaultDrawers` provided by the library. 

Currently the library supports by default: 

- AddButtonDrawer
- ImageGroupDrawer
- ImageStepDrawer
- MessageStepDrawer
- VideoStepDrawer

Each Drawer can be substituted to change the default behaviour of the library to suit your intended behaviour. 

### Normalization

Custom normalizers allow users to merge, change the position of, and add new StoryUnits. These classes are designed to modify the story data in response to user input, backend input, or app logic.

Currently the library supports:

- Merge items of the same time toghether. When a list of `StorySteps` of type "image" has the same position, they are merged into "group_image". Instead of using `ImageStepDrawer` the new StoryUnit now is drawn with `ImageGroupDrawer` and a image gallery is presented to the user. Example: 

![Screenshot 2023-04-17 at 23 10 16](https://user-images.githubusercontent.com/10619102/232611555-32ed2125-2622-4f69-8fde-e140751dbb2c.png)

- Normalize the position of items with `PositionNormalization`. This is needed to avoid `StoryUnits` with wrong `localPosition`.

**Please note that normalizers do not have a commutative property, so it is important to always place the PositionNormalization last. Additionally, changing the order of normalizers may affect the end result.**
