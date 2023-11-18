This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


#### **1. Application Distribution Limitations**

The React Native and TypeScript Account Upgrade mobile application is designed for Android and iOS platforms. Due to its visuals likeness to the existing software solution, it's considered company property. Distribution through official app stores is restricted to maintain the application's proprietary nature.

#### **2. Online Hosting**

Hosting the React Native Application online as a website application (using GitHub Pages or Firebase) is impractical. The application relies on native device functionalities not available in a web environment.

#### **3. Exporting Packaged Files of the Application**

To securely deploy the application, it can be packaged into two files: .ipa for iOS and .apk for Android. These files can be downloaded onto controlled individual devices. Generating an .ipa for iOS is limited and requires an Apple Developer License, making it currently unfeasible. However, an .apk for Android can be generated without additional licensing.

- **For Android Testing:**
  - To test the Android version, users can download the 'app-release.apk' file from [this link](https://drive.google.com/file/d/13ZV1bAy9n6RfF2VMrDA7gcWrvecp1naC/view?usp=sharin) without needing an official developer license.

#### **4. Advanced Testing Methods**

This section details testing using virtual emulators and simulators on Windows or MacOS.

**System Requirements:**
- Integrated Developer Environment (IDE) (e.g., Visual Studio Code)
- XCode version 14.2 and above (Mac only)
- Android Studio version 2022.3.1 Patch 2 and above (Mac and Windows)
- Npm (or yarn if preferred) as a package manager.
- Node.js 

**Note:**
- Mac users need to install both XCode and Android Studio for iOS and Android testing.
- Windows users need only need to install Android Studio (iOS testing is not possible on Windows devices).

**Setup CLI:**
- Install Brew: [Brew download page](https://brew.sh/)
  
**XCode:**
- Go to the [Apple developer download page](https://developer.apple.com/download/more/)
- Download and install Command line tools for XCODE 14.2+
- Download and install XCODE 14.2+

**Android Studio:**
- Go to the [Android developer page](https://developer.android.com/studio)
- Download and install ANDROIDSTUDIO Version 2022.3.1 Patch 2


**Install Node.js (for npm):**
- Either via brew: `brew install node` or go to the [Node downloads page](https://nodejs.org/en/download/)
-
-   globally: `npm i -g yarn`

(or)

**Install Yarn:**
- Either via brew: `brew install yarn` or npm globally: `npm i -g yarn`



**VSCode:**
- Install: `brew install visual-studio-code`

#### **Testing and Setup Steps:**

1. **Clone the Application GitHub Repository:**
   - Open the terminal in your selected IDE and run the command:
     ```
     git clone https://github.com/justinablair/UpgradeMobileApp.git
     ```

2. **Navigate to the Project Directory:**
   - In the terminal, run the command:
     ```
     cd UpgradeMobileApp
     ```

3. **Install Project Dependencies:**
   - In the terminal, run the command:
     ```
     npm install
     ```
     - **For Mac Users Only:**
       ```
       sudo gem install cocoapods
       cd ios
       pod install
       ```

4. **Running the Application:**
   - In the terminal, run the command:
     ```
     yarn start
     ```
     - Press 'i' for iOS or 'a' for Android to open the respective emulators.
     - **Or, Using Method 2:**
       - For iOS: `npx react-native run-ios`
       - For Android: `npx react-native run-android`

5. **Running Unit and Functional Tests:**
   - Run the following command in the terminal:
     ```
     yarn test
     ```

These comprehensive steps cover distribution limitations, alternative deployment methods, and advanced testing scenarios for the React Native and TypeScript Account Upgrade mobile application.
# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
