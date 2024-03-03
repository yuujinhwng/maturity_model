<!-- Level1.svelte -->
<script>
    function closeWindow() {
      window.close();
    }
  </script>

<div class="lvl1">
<h1 style="text-align: center; font-size: 34px; font-weight: bold;">Level 1</h1>
<div class="description">
  <p>Individuals at this level are beginners with limited understanding and practical experience in generative AI</p>
  <h2>Proficiency Indicators:</h2>
  <ul>
    <li>Understands basic concepts of generative AI, such as neural networks and training data</li>
    <li>Can follow tutorials to implement simple generative models</li>
    <li>Requires significant guidance and supervision to complete tasks</li>
  </ul>
</div>

</div>

<style>
.lvl1 {
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
