uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform float uDarker;

varying float vElevation;


void main()
{
    float mixStrenth = ((vElevation + uColorOffset) * uColorMultiplier) - uDarker;
    vec3 oceanColor = mix(uDepthColor, uSurfaceColor, mixStrenth);
    gl_FragColor = vec4(oceanColor, 1.0);
}