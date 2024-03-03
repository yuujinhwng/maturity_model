<!-- Level2.svelte -->
<script>
    function closeWindow() {
      window.close();
    }
  </script>
  
  <div class="lvl2">
    <h1 style="text-align: center; font-size: 34px; font-weight: bold;">Level 2</h1>
<div class="description">
  <p>Individuals at this level are actively learning and expanding their knowledge and skills in generative AI</p>
  <h2>Proficiency Indicators:</h2>
  <ul>
    <li>Demonstrates familiarity with various types of generative models (e.g., GANs, VAEs)</li>
    <li>Can independently implement and train basic generative models</li>
    <li>Participates in learning communities and seeks out additional resources for self-improvement</li>
  </ul>
</div>

</div>

<style>
.lvl2 {
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