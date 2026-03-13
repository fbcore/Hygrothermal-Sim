(function(){let e={air:{id:`air`,name:`공기층 (Air)`,category:`기타`,color:`#E0F7FA`,conductivity:.025,permeability:195e-12},defect:{id:`defect`,name:`시공 결함 (Defect)`,category:`기타`,color:`#FF5252`,conductivity:1,permeability:5e-11},wood:{id:`wood`,name:`목재 (Wood)`,category:`구조재`,color:`#8D6E63`,conductivity:.13,permeability:4e-12},concrete:{id:`concrete`,name:`콘크리트 (Concrete)`,category:`구조재`,color:`#757575`,conductivity:1.6,permeability:2e-12},brick:{id:`brick`,name:`시멘트/조적 벽돌 (Brick)`,category:`구조재`,color:`#A1887F`,conductivity:.8,permeability:12e-12},alc:{id:`alc`,name:`ALC 블럭 (ALC)`,category:`구조재`,color:`#BDBDBD`,conductivity:.1,permeability:25e-12},steel:{id:`steel`,name:`일반 스틸 (Steel)`,category:`구조재/금속`,color:`#455A64`,conductivity:50,permeability:0},sts:{id:`sts`,name:`스테인리스 스틸 (STS)`,category:`구조재/금속`,color:`#B0BEC5`,conductivity:15,permeability:0},alumStruct:{id:`alumStruct`,name:`구조용 알루미늄 (Alum)`,category:`구조재/금속`,color:`#CFD8DC`,conductivity:200,permeability:0},eps:{id:`eps`,name:`비드법 보온판 (EPS)`,category:`단열재`,color:`#FFF59D`,conductivity:.034,permeability:4e-12},xps:{id:`xps`,name:`압출법 보온판 (XPS)`,category:`단열재`,color:`#FFCC80`,conductivity:.028,permeability:15e-13},glasswool:{id:`glasswool`,name:`그라스울 (Glass Wool)`,category:`단열재`,color:`#F48FB1`,conductivity:.036,permeability:15e-11},rockwool:{id:`rockwool`,name:`암면 (Rock Wool)`,category:`단열재`,color:`#A1887F`,conductivity:.038,permeability:15e-11},mineralwool:{id:`mineralwool`,name:`미네랄울 (Mineral Wool)`,category:`단열재`,color:`#D7CCC8`,conductivity:.042,permeability:15e-11},pfBoard:{id:`pfBoard`,name:`PF 보드 (PF Board)`,category:`단열재`,color:`#EF9A9A`,conductivity:.02,permeability:5e-12},purFoam:{id:`purFoam`,name:`PUR/PIR 폼 (PUR)`,category:`단열재`,color:`#FFF9C4`,conductivity:.024,permeability:4e-12},reflectiveInsul:{id:`reflectiveInsul`,name:`열반사 단열재 (Radiant)`,category:`단열재`,color:`#EEEEEE`,conductivity:.04,permeability:0},cellulose:{id:`cellulose`,name:`셀룰로오스 (Cellulose)`,category:`단열재`,color:`#C5E1A5`,conductivity:.038,permeability:1e-10},stoneGranite:{id:`stoneGranite`,name:`화강석 (Granite)`,category:`석재/타일/마감`,color:`#9E9E9E`,conductivity:3,permeability:4e-13},stoneMarble:{id:`stoneMarble`,name:`대리석 (Marble)`,category:`석재/타일/마감`,color:`#FAFAFA`,conductivity:2.5,permeability:5e-13},tile:{id:`tile`,name:`자기질 타일 (Tile)`,category:`석재/타일/마감`,color:`#607D8B`,conductivity:1.3,permeability:0},mortar:{id:`mortar`,name:`시멘트 모르타르 (Mortar)`,category:`석재/타일/마감`,color:`#9E9E9E`,conductivity:1.2,permeability:1e-11},gypsum:{id:`gypsum`,name:`석고보드 (Gypsum Board)`,category:`석재/타일/마감`,color:`#F5F5F5`,conductivity:.18,permeability:2e-11},plywood:{id:`plywood`,name:`합판/OSB (Plywood)`,category:`석재/타일/마감`,color:`#D7CCC8`,conductivity:.12,permeability:25e-13},vaporBarrier:{id:`vaporBarrier`,name:`방습층 (Vapor Barrier)`,category:`기밀/투습/방수`,color:`#1565C0`,conductivity:.33,permeability:0},airBarrier:{id:`airBarrier`,name:`투습방수지 (House Wrap)`,category:`기밀/투습/방수`,color:`#4DB6AC`,conductivity:.2,permeability:13e-12},epdm:{id:`epdm`,name:`EPDM/시트방수`,category:`기밀/투습/방수`,color:`#212121`,conductivity:.17,permeability:1e-14},glass:{id:`glass`,name:`일반 유리 (Clear Glass)`,category:`창호/유리`,color:`#B3E5FC`,conductivity:1,permeability:0},loweGlass:{id:`loweGlass`,name:`로이 유리 (Low-E Glass)`,category:`창호/유리`,color:`#81D4FA`,conductivity:.8,permeability:0},argonGas:{id:`argonGas`,name:`아르곤 가스 (Argon)`,category:`창호/유리`,color:`#E0F2F1`,conductivity:.016,permeability:195e-12},stdSpacer:{id:`stdSpacer`,name:`알루미늄 간봉 (Spacer)`,category:`창호/부속`,color:`#90A4AE`,conductivity:160,permeability:0},insulSpacer:{id:`insulSpacer`,name:`단열 간봉 (Warm Edge)`,category:`창호/부속`,color:`#5D4037`,conductivity:.2,permeability:1e-16},pvcFrame:{id:`pvcFrame`,name:`PVC 창틀 (PVC Frame)`,category:`창호/부속`,color:`#4DD0E1`,conductivity:.17,permeability:2e-14},alumFrame:{id:`alumFrame`,name:`알루미늄 창틀 (Alum Frame)`,category:`창호/부속`,color:`#CFD8DC`,conductivity:160,permeability:0}},t=.0025;function n(e){return e>=0?610.5*Math.exp(17.269*e/(237.3+e)):610.5*Math.exp(21.875*e/(265.5+e))}function r(e,t){return e===0||t===0?0:2*e*t/(e+t)}let i=1e-5;1/.13*t,1/.04*t;let a=.08;function o(e,t,n,i,a,o){let s=e===`air`,c=t===`air`;if(s&&c){let e=o*.08;return a<e||a>o-e?2e3:.15}return s===c?r(n,i):a<o/2?.01923076923076923:.0625}let s=1e-15;function c(e,t,n,a){let o=e===`air`,c=t===`air`,l=n<s?0:n,u=a<s?0:a;return o&&c?i:o===c?r(l,u):r(o?i:l,c?i:u)}function l(t,r,i,s,l=`wall`){let u=0,d=0,f=n(s.T_in)*(s.RH_in/100),p=n(s.T_out)*(s.RH_out/100);for(let n=0;n<i;n++)for(let m=0;m<r;m++){let h=t[n][m],g=e[h.material],_=h.T,v=h.P;if(m===0){h.T=s.T_in,h.P=f;continue}else if(m===r-1){h.T=s.T_out,h.P=p;continue}let y=0,b=0,x=0,S=0,C=t[n][m-1].material,w=e[C],T=o(h.material,C,g.conductivity,w.conductivity,m-.5,r),E=c(h.material,C,g.permeability,w.permeability);y+=T*t[n][m-1].T,x+=T,b+=E*t[n][m-1].P,S+=E;let D=t[n][m+1].material,O=e[D],k=o(h.material,D,g.conductivity,O.conductivity,m+.5,r),A=c(h.material,D,g.permeability,O.permeability);if(y+=k*t[n][m+1].T,x+=k,b+=A*t[n][m+1].P,S+=A,n>0){let i=t[n-1][m].material,a=e[i],s=o(h.material,i,g.conductivity,a.conductivity,m,r),l=c(h.material,i,g.permeability,a.permeability);y+=s*t[n-1][m].T,x+=s,b+=l*t[n-1][m].P,S+=l}if(n<i-1){let i=t[n+1][m].material,a=e[i],s=o(h.material,i,g.conductivity,a.conductivity,m,r),l=c(h.material,i,g.permeability,a.permeability);y+=s*t[n+1][m].T,x+=s,b+=l*t[n+1][m].P,S+=l}if(x>0){let e=y/x,o=h.T+.5*(e-h.T);if(g.id===`air`&&m>r*.1&&m<r*.9)if(l===`wall`){let e=n>0?t[n-1][m].T:o,r=n<i-1?t[n+1][m].T:o;o+=(r-e)*a}else{let e=m>0?t[n][m-1].T:o,i=m<r-1?t[n][m+1].T:o;o+=(e-i)*a}h.T=o}if(S>0){let e=b/S;h.P+=.5*(e-h.P)}u=Math.max(u,Math.abs(h.T-_)),d=Math.max(d,Math.abs(h.P-v))}return{maxDeltaT:u,maxDeltaP:d}}function u(e,t,n,r,i,a=`wall`){let o={maxDeltaT:0,maxDeltaP:0};for(let s=0;s<i;s++)o=l(e,t,n,r,a);return o}var d=`struct Config {\r
    width: u32,\r
    height: u32,\r
    T_in: f32,\r
    RH_in: f32,\r
    T_out: f32,\r
    RH_out: f32,\r
    P_in: f32,\r
    P_out: f32,\r
    cellSize: f32,\r
    orientation: u32, // 0: wall, 1: roof\r
};\r
\r
struct MaterialProps {\r
    conductivity: f32,\r
    permeability: f32,\r
    isAir: f32, // 1.0 for air, 0.0 for solid\r
    padding: f32,\r
};\r
\r
@group(0) @binding(0) var<uniform> config: Config;\r
@group(0) @binding(1) var<storage, read> materials: array<u32>;\r
@group(0) @binding(2) var<storage, read> matProps: array<MaterialProps>;\r
\r
@group(1) @binding(0) var<storage, read> tempRead: array<f32>;\r
@group(1) @binding(1) var<storage, read_write> tempWrite: array<f32>;\r
@group(1) @binding(2) var<storage, read> pressRead: array<f32>;\r
@group(1) @binding(3) var<storage, read_write> pressWrite: array<f32>;\r
\r
fn get_idx(x: u32, y: u32) -> u32 {\r
    return y * config.width + x;\r
}\r
\r
fn get_harmonic_mean(v1: f32, v2: f32) -> f32 {\r
    if (v1 <= 0.0 || v2 <= 0.0) { return 0.0; }\r
    return (2.0 * v1 * v2) / (v1 + v2);\r
}\r
\r
const AIR_MIXING_K: f32 = 2000.0;\r
const AIR_CAVITY_K: f32 = 0.15;\r
const BUOYANCY_STRENGTH: f32 = 0.08;\r
const AIR_EFFECTIVE_PERM: f32 = 1e-5;\r
const K_INDOOR_SURFACE: f32 = 0.01923;  // (1/0.13) * 0.0025\r
const K_OUTDOOR_SURFACE: f32 = 0.0625; // (1/0.04) * 0.0025\r
const VAPOR_PROOF_LIMIT: f32 = 1e-15;\r
\r
fn get_effective_coef_t(matIdxA: u32, matIdxB: u32, x: u32) -> f32 {\r
    let pA = matProps[matIdxA];\r
    let pB = matProps[matIdxB];\r
    let isAirA = pA.isAir > 0.5;\r
    let isAirB = pB.isAir > 0.5;\r
\r
    if (isAirA && isAirB) { \r
        let edge = f32(config.width) * 0.08;\r
        if (f32(x) < edge || f32(x) > f32(config.width) - edge) {\r
            return AIR_MIXING_K;\r
        }\r
        return AIR_CAVITY_K;\r
    }\r
    if (isAirA != isAirB) { \r
        if (x < config.width / 2u) {\r
            return K_INDOOR_SURFACE;\r
        } else {\r
            return K_OUTDOOR_SURFACE;\r
        }\r
    }\r
    return get_harmonic_mean(pA.conductivity, pB.conductivity);\r
}\r
\r
fn get_effective_coef_p(matIdxA: u32, matIdxB: u32) -> f32 {\r
    let pA = matProps[matIdxA];\r
    let pB = matProps[matIdxB];\r
    let isAirA = pA.isAir > 0.5;\r
    let isAirB = pB.isAir > 0.5;\r
\r
    var permA = pA.permeability;\r
    if (permA < VAPOR_PROOF_LIMIT) { permA = 0.0; }\r
    var permB = pB.permeability;\r
    if (permB < VAPOR_PROOF_LIMIT) { permB = 0.0; }\r
\r
    if (isAirA && isAirB) { return AIR_EFFECTIVE_PERM; }\r
    if (isAirA != isAirB) {\r
        let vA = select(permA, AIR_EFFECTIVE_PERM, isAirA);\r
        let vB = select(permB, AIR_EFFECTIVE_PERM, isAirB);\r
        return get_harmonic_mean(vA, vB);\r
    }\r
    return get_harmonic_mean(permA, permB);\r
}\r
\r
@compute @workgroup_size(16, 16)\r
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {\r
    let x = global_id.x;\r
    let y = global_id.y;\r
\r
    if (x >= config.width || y >= config.height) { return; }\r
\r
    let idx = get_idx(x, y);\r
    \r
    // Boundary Conditions\r
    if (x == 0u) {\r
        tempWrite[idx] = config.T_in;\r
        pressWrite[idx] = config.P_in;\r
        return;\r
    }\r
    if (x == config.width - 1u) {\r
        tempWrite[idx] = config.T_out;\r
        pressWrite[idx] = config.P_out;\r
        return;\r
    }\r
\r
    let matIdx = materials[idx];\r
    let isAirSelf = matProps[matIdx].isAir > 0.5;\r
    \r
    var sumT = 0.0;\r
    var sumCoefT = 0.0;\r
    var sumP = 0.0;\r
    var sumCoefP = 0.0;\r
\r
    // Neighbors\r
    let dx = array<i32, 4>(-1, 1, 0, 0);\r
    let dy = array<i32, 4>(0, 0, -1, 1);\r
\r
    for (var i = 0; i < 4; i++) {\r
        let nx = i32(x) + dx[i];\r
        let ny = i32(y) + dy[i];\r
\r
        if (nx >= 0 && nx < i32(config.width) && ny >= 0 && ny < i32(config.height)) {\r
            let nIdx = get_idx(u32(nx), u32(ny));\r
            let nMatIdx = materials[nIdx];\r
            \r
            let cT = get_effective_coef_t(matIdx, nMatIdx, x);\r
            let cP = get_effective_coef_p(matIdx, nMatIdx);\r
            \r
            sumT += cT * tempRead[nIdx];\r
            sumCoefT += cT;\r
            sumP += cP * pressRead[nIdx];\r
            sumCoefP += cP;\r
        }\r
    }\r
\r
    let currentT = tempRead[idx];\r
    if (sumCoefT > 0.0) {\r
        let targetT = sumT / sumCoefT;\r
        var nextT = currentT + 0.5 * (targetT - currentT);\r
        \r
        // Buoyancy in air cavities\r
        if (isAirSelf) {\r
            let edge = f32(config.width) * 0.1;\r
            if (f32(x) > edge && f32(x) < f32(config.width) - edge) {\r
                var tAbove = nextT;\r
                var tBelow = nextT;\r
                \r
                if (config.orientation == 0u) { // Wall: Vertical buoyancy\r
                    if (y > 0u) { tAbove = tempRead[get_idx(x, y - 1u)]; }\r
                    if (y < config.height - 1u) { tBelow = tempRead[get_idx(x, y + 1u)]; }\r
                    nextT += (tBelow - tAbove) * BUOYANCY_STRENGTH;\r
                } else { // Roof: Horizontal buoyancy (Right is UP)\r
                    // If Right is UP: tAbove is right (x+1), tBelow is left (x-1)\r
                    if (x < config.width - 1u) { tAbove = tempRead[get_idx(x + 1u, y)]; }\r
                    if (x > 0u) { tBelow = tempRead[get_idx(x - 1u, y)]; }\r
                    nextT += (tBelow - tAbove) * BUOYANCY_STRENGTH;\r
                }\r
            }\r
        }\r
        tempWrite[idx] = nextT;\r
    } else {\r
        tempWrite[idx] = currentT;\r
    }\r
\r
    let currentP = pressRead[idx];\r
    if (sumCoefP > 0.0) {\r
        let targetP = sumP / sumCoefP;\r
        pressWrite[idx] = currentP + 0.5 * (targetP - currentP);\r
    } else {\r
        pressWrite[idx] = currentP;\r
    }\r
}\r
`,f=class{device=null;pipeline=null;width;height;configBuffer=null;materialBuffer=null;matPropsBuffer=null;tempBuffers=null;pressBuffers=null;commonBindGroup=null;bindGroups=null;iteration=0;materialIds;constructor(t,n){this.width=t,this.height=n,this.materialIds=Object.keys(e)}async init(){if(!navigator.gpu)throw Error(`WebGPU not supported`);let e=await navigator.gpu.requestAdapter();if(!e)throw Error(`No adapter found`);this.device=await e.requestDevice();let t=this.device.createShaderModule({code:d});this.pipeline=this.device.createComputePipeline({layout:`auto`,compute:{module:t,entryPoint:`main`}}),this.setupBuffers()}setupBuffers(){if(!this.device)return;let t=this.width*this.height;this.configBuffer=this.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.materialBuffer=this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.matPropsBuffer=this.device.createBuffer({size:this.materialIds.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let n=new Float32Array(this.materialIds.length*4);this.materialIds.forEach((t,r)=>{let i=e[t];n[r*4+0]=i.conductivity,n[r*4+1]=i.permeability,n[r*4+2]=t===`air`?1:0}),this.device.queue.writeBuffer(this.matPropsBuffer,0,n),this.tempBuffers=[this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})],this.pressBuffers=[this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})],this.commonBindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.configBuffer}},{binding:1,resource:{buffer:this.materialBuffer}},{binding:2,resource:{buffer:this.matPropsBuffer}}]}),this.bindGroups=[this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.tempBuffers[0]}},{binding:1,resource:{buffer:this.tempBuffers[1]}},{binding:2,resource:{buffer:this.pressBuffers[0]}},{binding:3,resource:{buffer:this.pressBuffers[1]}}]}),this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.tempBuffers[1]}},{binding:1,resource:{buffer:this.tempBuffers[0]}},{binding:2,resource:{buffer:this.pressBuffers[1]}},{binding:3,resource:{buffer:this.pressBuffers[0]}}]})]}updateData(e,t,r=`wall`){if(!this.device||!this.configBuffer||!this.materialBuffer)return;let i=this.width*this.height,a=new Uint32Array(i),o=new Float32Array(i),s=new Float32Array(i);for(let t=0;t<this.height;t++)for(let n=0;n<this.width;n++){let r=t*this.width+n,i=e[t][n];a[r]=this.materialIds.indexOf(i.material),o[r]=i.T,s[r]=i.P}let c=n(t.T_in)*(t.RH_in/100),l=n(t.T_out)*(t.RH_out/100),u=new Float32Array(16),d=new Uint32Array(u.buffer);d[0]=this.width,d[1]=this.height,u[2]=t.T_in,u[3]=t.RH_in,u[4]=t.T_out,u[5]=t.RH_out,u[6]=c,u[7]=l,u[8]=.0025,d[9]=r===`wall`?0:1,this.device.queue.writeBuffer(this.configBuffer,0,u),this.device.queue.writeBuffer(this.materialBuffer,0,a),this.device.queue.writeBuffer(this.tempBuffers[0],0,o),this.device.queue.writeBuffer(this.tempBuffers[1],0,o),this.device.queue.writeBuffer(this.pressBuffers[0],0,s),this.device.queue.writeBuffer(this.pressBuffers[1],0,s),this.iteration=0}async run(e){if(!this.device||!this.pipeline||!this.bindGroups)throw Error(`Not initialized`);let t=this.device.createCommandEncoder();for(let n=0;n<e;n++){let e=t.beginComputePass();e.setPipeline(this.pipeline),e.setBindGroup(0,this.commonBindGroup),e.setBindGroup(1,this.bindGroups[this.iteration%2]),e.dispatchWorkgroups(Math.ceil(this.width/16),Math.ceil(this.height/16)),e.end(),this.iteration++}this.device.queue.submit([t.finish()]);let n=this.iteration%2,r=this.iteration%2,i=this.device.createBuffer({size:this.width*this.height*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=this.device.createBuffer({size:this.width*this.height*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),o=this.device.createCommandEncoder();o.copyBufferToBuffer(this.tempBuffers[n],0,i,0,this.width*this.height*4),o.copyBufferToBuffer(this.pressBuffers[r],0,a,0,this.width*this.height*4),this.device.queue.submit([o.finish()]),await Promise.all([i.mapAsync(GPUMapMode.READ),a.mapAsync(GPUMapMode.READ)]);let s=new Float32Array(i.getMappedRange().slice(0)),c=new Float32Array(a.getMappedRange().slice(0));return i.unmap(),a.unmap(),i.destroy(),a.destroy(),{tempData:s,pressData:c}}destroy(){this.device&&=(this.configBuffer?.destroy(),this.materialBuffer?.destroy(),this.matPropsBuffer?.destroy(),this.tempBuffers&&(this.tempBuffers[0].destroy(),this.tempBuffers[1].destroy()),this.pressBuffers&&(this.pressBuffers[0].destroy(),this.pressBuffers[1].destroy()),this.device.destroy(),null)}};let p=null,m=!1,h=!1,g=!1,_=0,v=0,y=[],b={T_in:20,RH_in:50,T_out:-5,RH_out:80},x=!1,S=`wall`;async function C(){if(!(!h||x)){try{if(m&&p){g||=(p.updateData(y,b,S),!0);let{tempData:e,pressData:t}=await p.run(250);if(h){let n=0,r=0;for(let i=0;i<_*v;i++){let a=Math.floor(i/_),o=i%_,s=Math.abs(e[i]-y[a][o].T),c=Math.abs(t[i]-y[a][o].P);n=Math.max(n,isNaN(s)?0:s),r=Math.max(r,isNaN(c)?0:c),y[a][o].T=e[i],y[a][o].P=t[i]}n<5e-8&&r<5e-4&&(h=!1,self.postMessage({type:`STOPPED`}));let i=e.slice(0).buffer,a=t.slice(0).buffer;x=!0,self.postMessage({type:`SYNC_DATA`,payload:{tempData:new Float32Array(i),pressData:new Float32Array(a),steps:250,residT:n,residP:r}},[i,a])}}else if(h){let e=u(y,_,v,b,50,S),t=_*v,n=new Float32Array(t),r=new Float32Array(t);for(let e=0;e<v;e++)for(let t=0;t<_;t++){let i=e*_+t;n[i]=y[e][t].T,r[i]=y[e][t].P}e.maxDeltaT<5e-8&&e.maxDeltaP<5e-4&&(h=!1,self.postMessage({type:`STOPPED`}));let i=n.buffer,a=r.buffer;x=!0,self.postMessage({type:`SYNC_DATA`,payload:{tempData:new Float32Array(i),pressData:new Float32Array(a),steps:50,residT:e.maxDeltaT,residP:e.maxDeltaP}},[i,a])}}catch(e){console.error(`Worker simulation error:`,e),h=!1,self.postMessage({type:`ERROR`,payload:e.message})}h&&!x&&setTimeout(C,0)}}self.onmessage=async e=>{let{type:t,payload:n}=e.data;switch(t){case`ACK`:x=!1,h&&C();break;case`INIT`:_=n.width,v=n.height;try{p=new f(_,v),await p.init(),m=!0,self.postMessage({type:`STATUS`,payload:{useGpu:!0,message:`WebGPU Initialized`}})}catch(e){console.warn(`WebGPU init failed in worker:`,e),m=!1,self.postMessage({type:`STATUS`,payload:{useGpu:!1,message:`Fallback to JS Mode`}})}break;case`UPDATE_STATE`:y=n.grid,b=n.boundaries,S=n.orientation||`wall`,g=!1;break;case`START`:h||(h=!0,x=!1,C());break;case`STOP`:h=!1;break;case`RESET`:h=!1,g=!1,x=!1;for(let e=0;e<v;e++)for(let t=0;t<_;t++)y[e][t].T=20,y[e][t].P=0;p&&(p.updateData(y,b),g=!0);break;case`DESTROY`:h=!1,p&&=(p.destroy(),null),self.close();break}}})();