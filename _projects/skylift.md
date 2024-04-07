---
hasThumbnail: true

visit:
  - anchorText: "Visit project documentation"
    link: "https://209d1cca-d099-49f8-b449-7fd58bb5305e.filesusr.com/ugd/b0cd45_2d2c66592ef9448b9a034cfbe9057e2d.pdf"
---

<table>
  <!-- First section with image on the left -->
  <tr>
    <td style="padding-right: 20px; padding-top: 20px; padding-bottom: 60px;">
      <img src="/assets/images/projects/Environment.jpg" alt="Alt text" title="Image Title" />
    </td>
    <td style="padding-left: 20px; text-align: justify; padding-top: 20px; padding-bottom: 60px;">
      <strong>OBJECTIVES:</strong><br><br>
      Design and develop a safe testbed environment where autonomous aerial and ground vehicles can operate coincidentally.
      <ul>
        <li>Autonomous vehicles must avoid obstacles.</li>
        <li>Autonomous vehicles must navigate efficiently.</li>
        <li>Autonomous vehicles must pick up and deliver packages.</li>
        <li>Must use IoT to record and upload operations data to the cloud for others to use.</li>
      </ul>
    </td>
  </tr>
  <!-- Second section with image on the right -->
  <tr>
    <td style="padding-right: 20px; padding-top: 60px; padding-bottom: 60px; text-align: justify; width: 50%;">
      <strong>Aerial System - Mechanical Design:</strong><br><br>
      The SkyLift utilizes the practice of controlled magnetism to pick-up and release ferrous objects. By rotating 2 diametric magnets, enclosed in a ferrous material, relative to each other, the strength of the magnetic field produced can be minimized and maximized.
    </td>
    <td style="padding-left: 20px; padding-top: 60px; padding-bottom: 60px;">
      <img src="/assets/images/projects/skyliftdesign.gif" alt="Alt text for another image" title="Title for another image" />
    </td>
  </tr>

  <!-- Third section with image on the left -->
  <tr>
    <td style="padding-right: 20px; padding-top: 60px; padding-bottom: 60px;">
      <img src="/assets/images/projects/ServoRotation.gif" alt="Alt text" title="Image Title" />
    </td>
    <td style="padding-left: 20px; text-align: justify; padding-top: 60px; padding-bottom: 60px; width: 50%;">
      <strong>Aerial System - Electrical Design:</strong><br><br>
      The SkyLift, powered by the Tello drone's battery, uses an ESP32C3 microcontroller with Arduino code to control a servo motor for rotation. Waypoints are collected through IoT functionality with ThingSpeak and added to the Python code, giving autonomy to the Tello drone for package pickup and delivery. A second Tello drone uses the anticollision Python code to halt commands when another drone is detected at 50% or higher confidence level, ensuring safe operation.
    </td>
  </tr>

  <!-- Fourth section with image on the right -->
  <tr>
    <td style="padding-right: 20px; padding-top: 60px; padding-bottom: 60px; text-align: justify; width: 50%;">
      <strong>Ground System - Mechanical Design:</strong><br><br>
     The claw mechanism utilizes two servo motors and two gear arms which allow the claw to open and close using the top servo motor. The top motor rotates between 0° and 45° in its open and closed position respectively, and the bottom motor rotates to angle the claw up and down for positioning.
    </td>
    <td style="padding-left: 20px; padding-top: 60px; padding-bottom: 60px;">
      <img src="/assets/images/projects/Claw.png" alt="Alt text for another image" title="Title for another image" />
    </td>
  </tr>
    <!-- Fifth section with image on the left -->
  <tr>
    <td style="padding-right: 20px; padding-top: 60px; padding-bottom: 60px;">
      <img src="/assets/images/projects/PerformingClaw.png" alt="Alt text" title="Image Title" />
    </td>
    <td style="padding-left: 20px; text-align: justify; padding-top: 60px; padding-bottom: 60px; width: 50%;">
      <strong>Ground System - Electrical Design:</strong><br><br>
      The Swarmie UGV uses a Romeo V2 microcontroller with ultrasonic sensors and XBee RFID for obstacle avoidance and path planning. A Raspberry Pi interfaces with the Romeo V2 and uses a gyroscope and camera to provide sensor data. The XBee markers are placed in the environment and send a signal to the Swarmie's RFID, which helps with navigation. The camera detects the QR code on the payload, and when it registers in the middle of the screen, the Swarmie engages the claw to pick up the package. The Swarmie makes navigation decisions based on the signal strength and size of send message.
    </td>
  </tr>

  <!-- Sixth section with image on the right -->
  <tr>
    <td style="padding-right: 20px; padding-top: 60px; padding-bottom: 60px; text-align: justify; width: 50%;">
      <strong>IoT Enablement:</strong><br><br>
    IoT is implemented to enable wireless data transfer between our unmanned aerial and ground vehicles and our cloud platform, ThingSpeak. Waypoints are generated on ThingSpeak, which the unmanned ground vehicles can collect using an API key. The unmanned ground vehicles collect acceleration and gyroscope data and send it wirelessly to the team's BeagleBone Green. With the BeagleBone Green, the team is then able to send and display real time data on our IoT cloud platform. 
    </td>
    <td style="padding-left: 20px; padding-top: 60px; padding-bottom: 60px;">
      <img src="/assets/images/projects/IoT.jpg" alt="Alt text for another image" title="Title for another image" />
    </td>
  </tr>

  <tr>
  <td colspan="2" style="padding: 20px; text-align: center;"> <!-- Use colspan to span across columns if needed -->
    <!-- Paste your iframe code here -->
    <iframe src="https://cornellprod-my.sharepoint.com/personal/pw463_cornell_edu/_layouts/15/Doc.aspx?sourcedoc={48117fcc-1573-44c1-b194-74b97a4bd867}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="752px" height="376px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
    <p style="text-align: left; margin-top: 10px;">Opening in full screen provides a better viewing experience.</p>
  </td>
</tr>

</table>

