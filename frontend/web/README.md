# EMEDICO REACT WEB PART

### - `src/assets` -> all static assets(images, svgs, etc..)

### - `src/pages` -> contains all the pages of the website. It will be like `src/pages/LoginPage/LoginPage.tsx`. If any component in the LoginPage.tsx is large, make a folder `src/pages/LoginPage/components` and add that component there.

### - `src/widgets` -> any component that is reusable in multiple components or pages like for example `src/widgets/Button.tsx.`

## Some more info about the black fungus folder structure

--page
|
--BlackFungus  
 |
--components
-- all other .tsx or .jsx or .js files. with GET,CREATE,UPDATE, DELETE in the end(these pages are showed when clicked from navbar.).

components will contain code for resuable part like BFSection1Form. And also it contains one thing important. **It will also contain for on the fly edit, see, delete views.** **On the fly meaning they can click on the patient in the dashBoard to see all their data or click on the edit button to edit right from there.**
