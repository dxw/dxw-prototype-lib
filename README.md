# dxw prototype library

A place for dxw designers to practise prototyping.

## How to install this app

You can run the app from your local directory by running

Steps:

```
1. git clone git@github.com:dxw/dxw-prototype-lib.git repository to a local directory folder
2. Navigate to the `dxw-prototype-lib` directory
3. Run the app from your local directory by running
`npm install` this command installs a package, and any packages that the app depends on.
In a separate session (new tab in terminal) Run the app `npm run dev`
4. To view the app in browser follow http://localhost:3000/
```

&nbsp;
&nbsp;

## How to add my exercise page(s)

### 1. Where to add your file

Go to `app/views/exercises/[exercise directory]/` and add your files there. You can create your own folder in this directory if necessary.

### 2. Naming convention

There’s no restriction. You can try something like:

```
[exercise-name]-[my name].html
```

For example:

```
apply-renew-passport-ming.html
```

### 3. Adding your link to the exercise

Attach the link of your file or index page in the content area of the exercise index page (usually `app/views/exercises/[exercise directory]/index.html`)

&nbsp;
&nbsp;

## How to add custom CSS classes to my own exercise

### 1. Where to add your file

Add your own SASS file to the directory `app/assets/sass/exercises/[exercise directory]/`.

### 2. Naming convention

There’s no restriction. You can try something like:

```
_[exercise-name]-[my name].scss
```

For example:

```
_apply-renew-passport-ming.scss
```

### 3. Import your SASS file to the master SCSS

Go to  `app/assets/sass/application.scss` and add the import statement:
`@import "exercises/[exercise directory]/[my SCSS file]";`
For example:

```
@import "exercises/apply-renew-passport/apply-renew-passport-ming";
```

&nbsp;
&nbsp;

## How to avoid overriding other people's CSS classes

### 1. Add a body class to your html file

```
{% set bodyClasses = "[exercise-name]-[my name]" %}
```

For example:

```
{% set bodyClasses = "exercise-apply-renew-passport-ming" %}
```

### 2. And then in your own SCSS file, put all your CSS rules into that body class like

```
.exercise-apply-renew-passport-ming {
 // My CSS rules here
}
```

&nbsp;
&nbsp;

## How to add my own routes

&nbsp;
&nbsp;

## How to upload my exercise

1. Create your own branch off the `main`.
2. Write clear commit messages.
3. Push your branch to GitHub.
4. Create your own pull request.
5. Request another designer to do a code review for you.
6. Once the pull request is approved, you can merge your branch to the `main`.

&nbsp;
&nbsp;

## How to do code review for other designers

1. Create a new local branch based on a remote branch (the branch in the code review request you received) by using the `--track` git command. For example:

```
git checkout -b exercise/ming-apply-renew-passport-homepage --track origin/exercise/ming-apply-renew-passport-homepage
```

2. Test the branch locally. You can make your comment on the code in the pull request.
3. If the branch is tested well, you can approve the pull request.

&nbsp;
&nbsp;

## How to create an exercise instruction page

&nbsp;
&nbsp;

## What kind of examples are we allowed to put on this website
