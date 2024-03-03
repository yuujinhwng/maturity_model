<!-- Level3.svelte -->
<script>
    function closeWindow() {
      window.close();
    }
  </script>
  <div class="lvl3">
    <h1 style="text-align: center; font-size: 34px; font-weight: bold;">Level 3</h1>
    <div class="description">
      <p>Individuals at this level possess practical experience and can effectively apply generative AI techniques to solve problems</p>
      <h2>Proficiency Indicators:</h2>
      <ul>
        <li>Able to select and fine-tune appropriate generative models for specific tasks</li>
        <li>Demonstrates proficiency in preprocessing data and optimizing model hyperparameters</li>
        <li>Capable of troubleshooting common issues in model training and deployment</li>
      </ul>
    </div>
    
    </div>
    
    <style>
    .lvl3 {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      padding: 20px;
      width: auto; /* Adjust the width dynamically based on content */
      max-width: 80%; /* Limit the maximum width */
      max-height: 80%; /* Limit the maximum height */
      overflow-y: auto; /* Add vertical scrollbar if needed */
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 0 auto; /* Center the container horizontally */
    }
    .description {
      margin-bottom: 20px;
    }
    </style>