# Set up your theme

After creating your repository, please activate GitHub pages from your repository `Settings/Pages` and set it to `GitHub Actions`.

Before you can start writing CSS you have to set up some files that are required to build the whole thing.

### 1. Edit `plugin.json`

This file is responsible for the plugin. Change the following items to fit your needs:

* `<NAME>` - Replace this with the "name" of your plugin.<br>
e.g.: `"name": "IITC plugin: TcTheme-YourTheme",`<br>
The same for `id`. (Don't use spaces and don't remove the "TcTheme" part).
* `<AUTHOR>` - your name.
* The `downloadURL` key:<br>
`<OWNER>` and `<REPO>` are referring to the owner and repository on GitHub.<br>
`<PLUGIN_NAME>` - copy the whole `id` field from above.

OK. This was the hardest part. Only one more file to edit and we are done with the setup. I promise :wink:

### 2. Edit `meta.json`

Inside the `theme` folder find the `meta.json` file and set:

* `name` - The name that will be displayed in the theme chooser.
* `preview` - The preview URL of your theme.

### 3. Create your theme (finally)

We are done with the setup. Let's go for the CSS.

#### `main.css`

This is ... well ... the main CSS file of your theme :stuck_out_tongue:

#### `other.css`

You can fill this file with CSS code that will be placed **after** the `main.css` code.

You can create additional CSS files here that are treated the same way. The order can not be guaranteed.

If you don't need this file, you can just delete it.

#### `variants`

You can create two or more CSS files in the `variants` folder which are placed at the **beginning** of the CSS file. The intent is to put variable declarations here.

Only one variant can be set.

#### `options`

You can create one or more CSS files in the `options` folder which are located at the **end**.

...
