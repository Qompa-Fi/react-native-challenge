# React Native Challenge 📐

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

> [!NOTE]
> If you have problems running the app, take into account that it was created with node **v20.x.x** + npm/npx **v10.7.0**.

## About our current mobile stack

We're using Expo, React Native, TypeScript, [Zustand](https://zustand-demo.pmnd.rs/), [TanStack Query](https://tanstack.com/query/latest), [Tailwind CSS](https://tailwindcss.com/), [NativeWind V4](https://www.nativewind.dev/v4/overview) and [React Native Reusables](https://github.com/mrzachnugent/react-native-reusables).

## The Challenge

On the first page of the application, you should **list the posts** retrieved from <https://jsonplaceholder.typicode.com/posts>. Each card should display the
provided **title** and **body**, and include a button to view the post comments on a separate page.

Additionally, there should be a page to view the **details of any post**. This page should display the title and body of the selected post, along with a list
of comments from <https://jsonplaceholder.typicode.com/posts/:post_id/comments>.

The user should be able to:

- Navigate to the next or previous page to keep viewing the list of posts.
- View the post comments.
- Navigate to the list of posts from the post details page.
- In the post details page, every text chunk can be copied to the clipboard by only typing on it. By example, if the post title is tapped twice on the screen, the
title should be copied to the clipboard.

## Evaluation Criteria

- Libraries that you're using and why.
- The creativity of the solution.
- Use of the best practices.
- The commit messages with their format are considered. We're following the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- The project can be launched on local.

## Bonus points

- When a text chunk is copied to the clipboard, a simple toast message should be displayed.
