# Set up your Theme

After creating your repository, please activate GitHub pages from your repositories `Settings/Pages`
under `Build and deployment` set the `Source` to `GitHub Actions`.

Before you can start writing CSS, you have to edit a file that is required to build the whole thing.

### Edit `plugin.json`

This file is responsible for the plugin. Change the following items to fit your needs:

* `<NAME>` - Replace this with the "name" of your plugin.<br>
e.g.: `"name": "IITC plugin: TcTheme-YourTheme",`<br>
The same for `id`. (Don't use spaces and don't remove the "TcTheme" part).
* `<AUTHOR>` - your name.
* The `downloadURL` key:<br>
`<OWNER>` and `<REPO>` are referring to the owner and repository on GitHub.<br>
`<PLUGIN_NAME>` - copy the whole `id` field from above.
* `<DISPLAY_NAME>`- The name that will be displayed in the theme chooser.
* `<PREVIEW_URL` - The preview URL of your theme.<br> By default, the preview image inside the theme folder will be copied to the GitHub page, so you can set the URL to it here.

OK. This was the hardest part. I promise :wink:

### Create your Theme

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
