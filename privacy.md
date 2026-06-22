## PRIVACY POLICY
**Effective Date:** June 22, 2026

Welcome to **Track or Trash**. Your privacy is critically important to us. This Privacy Policy explains how our client-side web application operates regarding user data, tokens, and third-party platform API integrations (specifically Spotify and Google/YouTube).

> ### 🔒 Security Notice
> Track or Trash is a serverless, client-side application. We do not own, lease, or operate external servers or remote databases to log or store your credentials or listening habits. All data operations occur exclusively within your web browser.

### 1. Data We Do Not Collect (Serverless Architecture)
Because Track or Trash runs entirely inside your browser's local environment, we do not access, store, or transmit your personal data to any external destination other than the official APIs of the connected music services. Specifically:
* **No Account Creation:** You do not register an account with Track or Trash.
* **No Personal Databases:** We do not track your IP address, username, geographic location, or device configuration on any central backend database.

### 2. Local Storage and Browser Session Data
To provide its core library management capabilities, Track or Trash utilizes your browser's local sandbox mechanism (`LocalStorage`) to remember configurations between updates or refreshes. The following parameters are kept strictly within your client environment:
* **API Credentials:** Developer keys manually provided by the user (such as Spotify Client ID and Client Secret) are saved locally on your hardware to make authenticating faster.
* **Access Tokens:** Temporary cryptographic authentication strings issued by third parties (Spotify and Google OAuth tokens) are kept locally to perform authorized changes to your libraries.
* **Application Preferences:** Context states like your chosen platform choice (Spotify or YouTube) are retained to serve correct scripts.

You can instantly wipe all local storage data by clearing your browser's cache or using built-in developer tooling tools.

### 3. Third-Party Integrations and OAuth Permissions
Track or Trash interfaces directly with third-party service provider ecosystems. By utilizing this software, you interact with:

#### A. Spotify API
The application prompts authentication scopes including `playlist-read-private`, `playlist-modify-private`, and `user-library-modify`. These grants are used solely to allow you to evaluate and curate your tracks directly via our custom swipe interface.

#### B. YouTube Data API
When switching configurations, authorization tokens are queried to search, pull, or modify your video and music playlist groupings. All transaction security falls completely under Google's standard security wrappers.

### 4. Data Deletion and Security
Since data never leaves your client, security is determined entirely by your device safety settings. We advise against deploying Track or Trash on publicly shared terminals. To revoke application authorization permanently, you can visit your explicit Google Account Permissions console or Spotify User Dashboard and cancel app connections.