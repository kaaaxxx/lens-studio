🧠 Lens Studio Project Context Model
1. Project Overview
Goal: Development of Augmented Reality (AR) Lenses for Snapchat.

Primary Tool: Lens Studio.

Core Languages: JavaScript (ES2019) and TypeScript.

Context Source: Lens Studio Docs

2. Folder Architecture (Mental Map)
/Public: The "Editable" heart. This maps to the Resources Panel.

Scripts/: Custom logic (JS/TS).

Textures/: Images and environment maps.

Meshes/: 3D models (FBX/OBJ).

/AdditionalFiles: Auto-generated metadata for 3D materials. Do not modify manually.

project.lsproj: The main project file. Essential for version control.

3. Coding Standards & API Patterns
When writing code for this repo, the AI should follow these rules:

Events: Use script.createEvent("UpdateEvent") or TapEvent for interactions.

Component Access: Use script.getSceneObject() or script.getComponent("Component.TypeName").

API Usage: Reference the global global object for Lens Studio built-ins (e.g., global.tweenManager).

Performance: Prioritize low memory usage. Avoid heavy UpdateEvent logic; use event-driven triggers where possible.

4. Logic Flow
Init: Setup variables and references in the top level of the script.

Input: Handle user interaction (Taps, Face Gestures, Hand Tracking).

Process: Manipulate SceneObject transforms or material parameters.

Output: Update the viewport via the Render Mesh or Text components.

5. AI Prompting Instructions
"You are an expert Lens Studio Developer. When I ask for code, assume we are working within the structure of the repo found at kaaaxxx.github.io/Lens-Studio/. Use Snapchat's JavaScript API, prefer TypeScript for complex logic, and ensure all scripts are compatible with the Resources panel in the Public/ folder."
