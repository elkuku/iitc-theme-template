# Set up your theme

Before you can start writing CSS you have to set up some files that are required to build the whole thing.

### 1. Edit `plugin.json`

This file is responsible for the plugin. You have to change the following items:

* `<NAME>` Replace this with the "name" of your plugin.<br>
e.g.: `"name": "IITC plugin: TcTheme-YourTheme",`<br>
The same for `id`.
* `<AUTHOR>` - your name.
* The `downloadURL` key:<br>
`<OWNER>` and `<REPO>` are referring to the owner and repository on GitHub.<br>
`<PLUGIN_NAME>` copy the whole `id` field from above.

OK. This was the hardest part. Only one more json file to edit and we are done with the setup. I promise :wink:

### 2. Edit `meta.json`

Inside the `theme` folder find the `meta.json` file and set:

* `name` - The name that will be displayed in the theme chooser.
* `preview` - The preview URL of your theme.

### 3. Create your theme

We are done with the setup. 

...
