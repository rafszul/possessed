abcs

diffuse light

`<filter id="f117" inkscape:label="Diffuse light" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="ABCs" inkscape:menu-tooltip="Basic diffuse bevel to use for building textures" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="6" in="SourceGraphic" result="result0"/>
            <feDiffuseLighting diffuseConstant="1" surfaceScale="10" result="result5">
                <feDistantLight elevation="25" azimuth="235"/>
            </feDiffuseLighting>
            <feComposite k1="1" in2="SourceGraphic" in="result5" result="result4" operator="arithmetic" k2="0" k3=".6"/>
        </filter>`
        
simple blur

`<filter id="f121" inkscape:label="Simple blur" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="ABCs" inkscape:menu-tooltip="Simple Gaussian blur, same as the blur slider in Fill and Stroke dialog" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="3"/>
        </filter>`

black outline

`<filter id="f166" inkscape:menu-tooltip="Draws a black outline around" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="ABCs" inkscape:label="Black outline" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="2" in="SourceAlpha" result="result0"/>
            <feComposite result="result3" operator="arithmetic" in2="result0" in="SourceGraphic" k2="1" k3="10"/>
            <feComposite k2="1" operator="in" in="result3" result="result4" in2="result3"/>
        </filter>`

clean edges

`<filter id="f205" inkscape:label="Clean edges" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="ABCs" inkscape:menu-tooltip="Removes or decreases glows and jaggeries around objects edges after applying some filters" height="1" width="1" y="0" x="0" color-interpolation-filters="sRGB">
            <feGaussianBlur result="result6" stdDeviation=".4"/>
            <feComposite in2="result6" operator="in" in="SourceGraphic" result="result7"/>
            <feComposite operator="in" in2="result7" result="result8" in="result7"/>
        </filter>`

---

bevels

ridged border
`<filter id="f014" inkscape:label="Ridged border" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:menu-tooltip="Ridged border with inner bevel" color-interpolation-filters="sRGB">
            <feMorphology radius="4.3" in="SourceAlpha" result="result91"/>
            <feComposite operator="out" in="SourceGraphic" in2="result91"/>
            <feGaussianBlur result="result0" stdDeviation="1.2"/>
            <feDiffuseLighting diffuseConstant="1">
                <feDistantLight elevation="66" azimuth="225"/>
            </feDiffuseLighting>
            <feBlend mode="multiply" in2="SourceGraphic"/>
            <feComposite operator="in" in2="SourceAlpha"/>
        </filter>`
matte bevel
`<filter id="f050" inkscape:label="Matte bevel" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:menu-tooltip="Soft, pastel-colored, blurry bevel" x="-.25" y="-.25" width="1.5" height="1.5" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="1" result="result6"/>
            <feComposite operator="in" in="result6" in2="result6" result="result7"/>
            <feGaussianBlur stdDeviation="8" result="result3" in="result7"/>
            <feComposite in2="result7" operator="over" result="result91"/>
            <feComposite operator="in" in="result3" result="result5" in2="result91"/>
            <feColorMatrix values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0 " result="result4"/>
            <feSpecularLighting surfaceScale="3" specularConstant="2" specularExponent="45" in="result4" result="result11">
                <fePointLight x="-5000" y="-10000" z="20000"/>
            </feSpecularLighting>
            <feComposite operator="arithmetic" k1="1" in2="result4" result="result10"/>
            <feComposite operator="arithmetic" k2=".5" k3="1" in="result5" result="result8" in2="result10"/>
            <feComposite result="result9" in2="result8"/>
            <feBlend mode="normal" in2="result9"/>
        </filter>`
glowing metal
`<filter id="f053" inkscape:menu-tooltip="Glowing metal texture" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:label="Glowing metal" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="3" result="result10"/>
            <feBlend in2="SourceGraphic" result="result5" mode="multiply" in="result10"/>
            <feComposite in2="SourceGraphic" in="result5" result="fbSourceGraphic" operator="over"/>
            <feGaussianBlur result="result9" stdDeviation="5"/>
            <feSpecularLighting in="result9" result="result1" lighting-color="#fff" surfaceScale="1" specularConstant="2.2" specularExponent="45">
                <fePointLight x="-5000" y="-10000" z="20000"/>
            </feSpecularLighting>
            <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in"/>
            <feComposite in="result2" result="result4" operator="arithmetic" k2="2" k3=".8" in2="fbSourceGraphic"/>
            <feBlend in="result4" in2="result4" mode="multiply"/>
        </filter>`
translucent
`<filter id="f055" inkscape:label="Translucent" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:menu-tooltip="Illuminated translucent plastic or glass effect" x="-.25" y="-.25" width="1.5" height="1.5" color-interpolation-filters="sRGB">
            <feBlend mode="screen" result="result1"/>
            <feGaussianBlur stdDeviation="8" result="result6"/>
            <feComposite operator="xor" in="result6" in2="SourceGraphic"/>
            <feGaussianBlur stdDeviation="5" result="result2"/>
            <feComposite operator="atop" in2="result1" result="result92"/>
            <feComposite operator="xor" in="result2" result="result4" in2="result92"/>
            <feGaussianBlur stdDeviation="1" result="result3" in="result4"/>
            <feSpecularLighting surfaceScale="3" specularConstant="1.5" specularExponent="45" result="result5">
                <fePointLight x="-5000" y="-8000" z="20000"/>
            </feSpecularLighting>
            <feComposite operator="in" in2="SourceGraphic" result="result93"/>
            <feComposite operator="arithmetic" k2="1" k3="2" in="result3" in2="result93" result="result94"/>
            <feComposite operator="atop" in="result5" in2="result94" result="result95"/>
            <feBlend mode="screen" in2="result95"/>
        </filter>`
raised border
`<filter id="f068" inkscape:label="Raised border" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:menu-tooltip="Strongly raised border around a flat surface" height="1.5" width="1.5" y="-.25" x="-.25" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="4" result="result1"/>
            <feComposite in="result1" in2="result1" result="result4" operator="in"/>
            <feGaussianBlur stdDeviation="2" result="result6" in="result4"/>
            <feComposite operator="xor" in="result6" in2="result4" result="result8"/>
            <feComposite operator="atop" result="fbSourceGraphic" in="result4" in2="result8"/>
            <feSpecularLighting specularExponent="10" specularConstant="1.3" surfaceScale="3" lighting-color="#fff" result="result1" in="fbSourceGraphic">
                <feDistantLight azimuth="235" elevation="55"/>
            </feSpecularLighting>
            <feComposite operator="atop" result="result2" in="result1" in2="fbSourceGraphic"/>
            <feComposite k3="1" k2="1" operator="arithmetic" result="result4" in="fbSourceGraphic" in2="result2"/>
            <feComposite operator="over" in="result4" in2="SourceGraphic"/>
            <feBlend mode="multiply" in2="result2"/>
        </filter>`
fat oil
`<filter id="f070" inkscape:label="Fat oil" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:menu-tooltip="Fat oil with some adjustable turbulence" height="1.4" width="1.4" y="-.2" x="-.2" color-interpolation-filters="sRGB">
            <feTurbulence numOctaves="3" seed="55" type="fractalNoise" baseFrequency=".02"/>
            <feGaussianBlur stdDeviation="1" result="result91"/>
            <feDisplacementMap scale="15" yChannelSelector="G" xChannelSelector="R" in="SourceGraphic" in2="result91"/>
            <feGaussianBlur stdDeviation="1.5" result="result92"/>
            <feComposite result="fbSourceGraphic" k4="-.3" k3="1" k2="1" operator="arithmetic" in2="result92"/>
            <feGaussianBlur stdDeviation="3.5" in="fbSourceGraphic" result="result0"/>
            <feSpecularLighting in="result0" result="result1" lighting-color="#fff" surfaceScale="3" specularConstant="1" specularExponent="55">
                <feDistantLight azimuth="235" elevation="65"/>
            </feSpecularLighting>
            <feComposite in2="fbSourceGraphic" in="result1" result="result2" operator="in"/>
            <feComposite in="fbSourceGraphic" result="result4" operator="arithmetic" k2=".4" k3="1.7" in2="result2"/>
            <feBlend result="fbSourceGraphic" mode="normal" in2="result2"/>
        </filter>`
electronic microscopy
`<filter id="f088" inkscape:label="Electronic microscopy" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Bevels" inkscape:menu-tooltip="Bevel, crude light, discoloration and glow like in electronic microscopy" x="-.15" y="-.15" width="1.3" height="1.3" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation=".5" result="result6"/>
            <feComposite operator="in" in="result6" in2="result6" result="result91"/>
            <feBlend mode="multiply" in="result6" result="result2" in2="result91"/>
            <feGaussianBlur stdDeviation="7" result="result3" in="result2"/>
            <feComposite in2="result2" result="result92"/>
            <feComposite operator="in" in="result3" result="result5" in2="result92"/>
            <feGaussianBlur stdDeviation="1" in="result5"/>
            <feSpecularLighting surfaceScale="2" specularConstant="1.5" specularExponent="100">
                <fePointLight x="-5000" y="-5000" z="20000"/>
            </feSpecularLighting>
            <feComposite operator="arithmetic" k1="1" in2="result5" result="result93"/>
            <feComposite operator="arithmetic" k2=".1" k3="1" in="result5" in2="result93" result="result94"/>
            <feBlend mode="multiply" in2="result94"/>
        </filter>`

---

blur

motion blur, hor
`<filter id="f004" inkscape:label="Motion blur, horizontal" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Blurs" inkscape:menu-tooltip="Blur as if the object flies horizontally; adjust Standard Deviation to vary force" color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5 0.01"/>
        </filter>`
apparition
`<filter id="f006" inkscape:label="Apparition" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" x="0" y="0" width="1" height="1" inkscape:menu="Blurs" inkscape:menu-tooltip="Edges are partly feathered out" color-interpolation-filters="sRGB">
            <feMorphology radius="4" in="SourceGraphic" result="result0"/>
            <feGaussianBlur in="result0" stdDeviation="8" result="result91"/>
            <feComposite operator="in" in="SourceGraphic" in2="result91"/>
        </filter>`
cross smooth
`<filter id="f056" inkscape:label="Cross-smooth" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Blurs" inkscape:menu-tooltip="Blur inner borders and intersections" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="3"/>
            <feColorMatrix result="fbSourceGraphic" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -2.5 "/>
        </filter>`
fancy-blur
`<filter id="f093" inkscape:label="Fancy blur" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Blurs" inkscape:menu-tooltip="Smooth colorized contour which allows desaturation and hue rotation" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="5" result="result1"/>
            <feComposite operator="arithmetic" k2="2" in="result1" in2="result1"/>
        </filter>`
blur content
`<filter id="f107" inkscape:label="Blur content" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Blurs" inkscape:menu-tooltip="Blur the contents of objects, preserving the outline" color-interpolation-filters="sRGB">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result7"/>
            <feGaussianBlur result="result6" stdDeviation="5"/>
            <feComposite in2="result7" operator="atop" in="result6" result="result91"/>
            <feComposite operator="in" in2="result91"/>
        </filter>`
noisy blur
`filter id="f158" inkscape:label="Noisy blur" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Blurs" inkscape:menu-tooltip="Small-scale roughening and blurring to edges and content" x="-.25" width="1.5" y="-.25" height="1.5" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="5" result="result1"/>
            <feTurbulence numOctaves="1" seed="0" type="fractalNoise" baseFrequency=".1" result="result2"/>
            <feDisplacementMap scale="5" yChannelSelector="G" xChannelSelector="R" result="result3" in="result1" in2="result2"/>
            <feComposite operator="atop" in2="result3"/>
        </filter>`
---

shadows, glows

cutout
`<filter id="f007" inkscape:label="Cutout" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" x="0" y="0" width="1" height="1" inkscape:menu="Shadows and Glows" inkscape:menu-tooltip="Drop shadow under the cut-out of the shape" color-interpolation-filters="sRGB">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4.2"/>
            <feOffset dy="5" dx="5" result="result91"/>
            <feComposite operator="out" in="SourceGraphic" in2="result91"/>
        </filter>`
inset
`<filter id="f039" inkscape:label="Inset" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:menu="Shadows and Glows" inkscape:menu-tooltip="Shadowy outer bevel" color-interpolation-filters="sRGB">
            <feMorphology result="result1" in="SourceAlpha" operator="dilate" radius="3.6"/>
            <feGaussianBlur stdDeviation="3.6" in="result1" result="result0"/>
            <feDiffuseLighting surfaceScale="-5">
                <feDistantLight elevation="45" azimuth="225"/>
            </feDiffuseLighting>
            <feComposite in2="result0" operator="in" result="result91"/>
            <feComposite in="SourceGraphic" in2="result91"/>
        </filter>`
in and out
glow
dark and glow
darken edges
fuzzy glow
inner glow

---

overlays

rubber stamp
speckle
zebra
carnaval

---

protrusion

ink bleed
fire
chewing gum

---

distort

ripple
torn edges
roughen inside
chalk and sponge
rough and dialte
lapping

---

materials

eroded metal
gold splatter
gold paste
enamel jewlery
3d marble

---

img effects

sharpen
edge detect
horizontal edge detect
vertical edge detect
pencil
blueprint
drawing
liquid drawing

---

textures

jam spread
crumpled plastic
watercolor
felt
melted rainbow
burst
gouche

---

bumps

velvet bumps
tinfoil
copper and chocolate
relief print

---

ridges

reflective gel a
reflective gel b

---

scatter

leaves
cubes
air spray

---

morphology

parallel hollow
hole
black hole
smooth outline
warm inside
cool outside
outline
smooth edges
color outline in
color outline

---

img efects transparent

hsl bumps alpha
alpha draw
alpha draw colour
canvas transparency
alpha engraving
alpha engraving b

---

non realistic 3d shaders

comics draft
comics fading
comics
satin
comics fluid
chrome cream

---

transparency utilities

light eraser
monochrome transparency
alpha repaint
saturation map




