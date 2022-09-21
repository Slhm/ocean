class Mesh{

    constructor(scene){
        this.scene = scene;
    }

    TextMesh(title, font, _size = 0.07, _height = 0.0005, _curveSegments = 12, _bevelEnabled = true, _bevelThickness = 0.03, _bevelSize = 0.005, _bevelOffset = 0, _bevelSegments = 5){
        const textGeom = new THREE.TextGeometry(title, {
            font: font, 
            size: _size, 
            height: _height,
            curveSegments: _curveSegments,
            bevelEnabled: _bevelEnabled,
            bevelThickness: _bevelThickness,
            bevelSize: _bevelSize,
            bevelOffset: _bevelOffset,
            bevelSegments: _bevelSegments
        });
    
        const textMaterial = new THREE.MeshStandardMaterial({
            color: '#fff'
        });
        textMesh = new THREE.Mesh(textGeom, textMaterial);
        textMesh.position.x = -0.4;
        textMesh.position.y = 0.1;
        textMesh.position.z = -0.1;
        textMesh.rotation.y = 0.3;
    
        textMesh.castShadow = true;
        textMesh.receiveShadow = true;
        this.scene.add(textMesh);
        return textMesh;
    }

}