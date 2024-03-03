<script>
	import { T, useFrame, useThrelte } from '@threlte/core';
	import {OrbitControls, interactivity, Text } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import lvl0 from './lvl0.svelte';
	import lvl1 from './lvl1.svelte';
	import lvl2 from './lvl2.svelte';
	import lvl3 from './lvl3.svelte';
	import lvl4 from './lvl4.svelte';
	import lvl5 from './lvl5.svelte';
	const { scene, camera, renderer } = useThrelte();

	interactivity()
  	const scale0 = spring(1)
	const scale1 = spring(1)
	const scale2 = spring(1)
	const scale3 = spring(1)
	const scale4 = spring(1)
	const scale5 = spring(1)

	let rotation = 0
	let isPointerOverSpheres = false

	useFrame((_, delta) => {
		if (!isPointerOverSpheres) {
			rotation += delta * 0.6
		}
	})

	function openPage0() {
    // Open a new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    // Render Level0 component inside the new window
    new lvl0({
        target: newWindow.document.body // Render inside the body of the new window
    });
	}

	function openPage1() {
    // Open a new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    // Render Level0 component inside the new window
    new lvl1({
        target: newWindow.document.body // Render inside the body of the new window
    });
	}

	function openPage2() {
    // Open a new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    // Render Level0 component inside the new window
    new lvl2({
        target: newWindow.document.body // Render inside the body of the new window
    });
	}

	function openPage3() {
    // Open a new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    // Render Level0 component inside the new window
    new lvl3({
        target: newWindow.document.body // Render inside the body of the new window
    });
	}

	function openPage4() {
    // Open a new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    // Render Level0 component inside the new window
    new lvl4({
        target: newWindow.document.body // Render inside the body of the new window
    });
	}

	function openPage5() {
    // Open a new window
    const newWindow = window.open('', '_blank', 'width=400,height=300');

    // Render Level0 component inside the new window
    new lvl5({
        target: newWindow.document.body // Render inside the body of the new window
    });
	}

</script>


<T.PerspectiveCamera makeDefault position={[0, -20, 150]} fov={35}>
	<OrbitControls enableDamping target={[0, 0, 0]} />
</T.PerspectiveCamera>

<T.AmbientLight color="#ffffff" intensity={0.05} />

<T.DirectionalLight intensity={1.8} position={[10, 20, 25]} castShadow shadow.bias={-0.0001} />

<T.Mesh position={[0,0,0]}>
	<T.BoxGeometry args={[.05, 1000, .05]} />
	<T.MeshBasicMaterial color="#ffffff" />
</T.Mesh>

<Text
  position={[-34, 30, 5]}
  text="Maturity Model"
  fontSize={10}
  color="#ffffff" 
  shadowColor="#000000" 
/>

<T.Group rotation.y={rotation}
on:pointerenter={() => isPointerOverSpheres = true}
on:pointerleave={() => isPointerOverSpheres = false}
>
	<T.Mesh position={[20, 5, 0]}
			scale={$scale0}
			on:pointerenter={() => scale0.set(1.7)}
			on:pointerleave={() => scale0.set(1)}
			on:click={openPage0}
	>
		<T.SphereGeometry args={[1, 64, 64]} />
		<T.MeshStandardMaterial color="#ffffff" />
	</T.Mesh>

	<T.Mesh position={[10, 0, 17.2]}
			scale={$scale1}
			on:pointerenter={() => scale1.set(1.7)}
			on:pointerleave={() => scale1.set(1)}
			on:click={openPage1}
	>
		<T.SphereGeometry args={[2, 64, 64]} />
		<T.MeshStandardMaterial color="#cbc6f5" />
	</T.Mesh>

	<T.Mesh position={[-10, -5 ,17.2]}
			scale={$scale2}
			on:pointerenter={() => scale2.set(1.7)}
			on:pointerleave={() => scale2.set(1)}
			on:click={openPage2}
	>
		<T.SphereGeometry args={[3, 64, 64]} />
		<T.MeshStandardMaterial color="#ada7eb" />
	</T.Mesh>

	<T.Mesh position={[-20, -10, 0]}
			scale={$scale3}
			on:pointerenter={() => scale3.set(1.7)}
			on:pointerleave={() => scale3.set(1)}
			on:click={openPage3}
	>
		<T.SphereGeometry args={[4, 64, 64]} />
		<T.MeshStandardMaterial color="#8587d4" />
	</T.Mesh>

	<T.Mesh position={[-10, -15, -17.2]}
			scale={$scale4}
			on:pointerenter={() => scale4.set(1.7)}
			on:pointerleave={() => scale4.set(1)}
			on:click={openPage4}
	>
		<T.SphereGeometry args={[5, 64, 64]} />
		<T.MeshStandardMaterial color="#5b5cb5" />
	</T.Mesh>

	<T.Mesh position={[10, -20, -17.2]}
			scale={$scale5}
			on:pointerenter={() => scale5.set(1.7)}
			on:pointerleave={() => scale5.set(1)}
			on:click={openPage5}
	>
		<T.SphereGeometry args={[6, 64, 64]} />
		<T.MeshStandardMaterial color="#383996" />
	</T.Mesh>
</T.Group>
