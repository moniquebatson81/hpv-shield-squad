# Mission Well Games: HPV Shield Squad

A free, standalone browser game for ages 9–12. Four missions, 16 challenges, optional synthesized sound, a learning score, and a downloadable digital shield. Designed for about 3–5 minutes; actual reading time varies and needs a child/caregiver playtest. No time limit, accounts, ads, analytics, cookies, or stored player information. No paid resources or external game dependencies. Separate from the Mission Well Games WordPress site.

## Your first Codex project

1. Open this repository in Codex. The existing checkout is the project folder; no new worktree is needed.
2. Ask Codex for one change at a time, such as “Make the Start button larger.”
3. Preview and play the game after each change. Ask Codex to explain unfamiliar code in everyday language.
4. Keep publishing as a separate decision. This version has not been deployed.

## Preview on your own computer (easiest)

1. Download this repository as a ZIP from GitHub, or download the files from Codex.
2. Extract/unzip the folder. Keep `index.html`, `styles.css`, `content.js`, and `game.js` together.
3. Double-click `index.html`. It opens in your browser. No installation is required.
4. To see a change, save the file and refresh the browser.

The game also works offline. Only the optional caregiver source links need internet access.

## Preview inside the development environment

From `/workspace/hpv-shield-squad`, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

This is an internal development server, not public hosting. Cloud onboarding does not provide a browser preview link. Use the downloaded-file method above to play on your computer. Codex can use a headless browser against this server for internal tests. Stop a foreground server with Ctrl+C. If port 8000 is occupied, use another port rather than stopping an unknown process.

## What each file does

- `index.html`: welcome screen, game area, and separate caregiver information.
- `styles.css`: colors, layout, keyboard focus, and reduced-motion rules.
- `content.js`: lessons, questions, answer choices, and explanations. Edit content here first. `answer: 0` means the first choice, `1` the second, and `2` the third.
- `game.js`: controls challenges, sound, scoring, replay, and shield download.
- `SOURCES.md`: medical claim/source mapping and review limitations.
- `TESTING.md`: a beginner-friendly test checklist and checks already performed.

Each completed challenge earns 10 learning points, including after retries. Maximum score is 160. Points and the shield represent learning, never vaccination status or medical protection. Refreshing or leaving the page resets progress. Sound starts off and plays only when enabled. No background music or audio files are downloaded.

## Free GitHub Pages publishing (later, only when you decide)

First finish the checklist in `TESTING.md`, including adult source review. These are instructions, not actions already taken:

1. Save/commit the files to your repository and push them to GitHub's `main` branch.
2. In GitHub, open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **main** and **/ (root)**, then **Save**. This step publishes publicly.
5. Wait for GitHub to display the site address and test that published site on phone/tablet and desktop.
6. When satisfied, add that address as a link on WordPress. No WordPress plugin or website changes are needed for the game itself.

GitHub Pages is free for public repositories on GitHub Free. Check repository visibility before publishing; public source files are visible to others. This game uses relative file paths so it can run under a repository Pages address.
