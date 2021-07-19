# ds-task

Project is available publicly here: https://ds-task123.netlify.app

### Run project locally
```
npm install
npm run serve
```

### Assumptions
- Website works on all modern browsers. IE is not supported.
- Website is fully responsive. It works on mobile, tablet and desktop.
- vue-atlaskit is used as a UI library.
- Website scores high on Google Lighthouse.
- Website is a SPA without Server Side Rendering.

### Applied techniques
- Project was created using vue-cli, which is a standard way of creating Vue projects.
- CSS Flexbox and CSS Grid for laying out content.
- TypeScript is used to provide typechecking and better IDE support.
- vee-validate is used as to make form validation easier. IMO this is the best form validation library in Vue ecosystem.
- SCSS is used instead of plain CSS. This allows nesting CSS rules and creating SASS variables.
- Netlify is used as hosting provider because it is free and very easy to use.

### Alternative solutions
- Scaffold project using Nuxt.js instead of vue-cli. This would result in better SEO.
- Write form validation by yourself instead of using vee-validate. This would result in more boilerplate in code.
- Do not use vue-atlaskit. Instead create controls from scratch. This would be much more time-consuming (i.e. date control could be very hard).
- Create different navbar layout.
- Use React instead instead of Vue. I was thinking about this but eventually I sticked to Vue.
- Create hamburger menu on mobiles. This would be necessary only if we have more navigation links.

### Other comments
- Form is validated on submit, field change and field unfocus.
- Avatar image is not required.
- Avatar image must be jpg, jpeg or png file.
- Avatar image cannot have size bigger than 1MB.
- "About" field is not required.
- "Phone" field only accepts digits, spaces and "+" character
