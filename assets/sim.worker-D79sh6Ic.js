(function(){let e={air:{id:`air`,name:`공기층 (Air)`,category:`기타`,color:`#E0F7FA`,conductivity:.025,permeability:195e-12},defect:{id:`defect`,name:`시공 결함 (Defect)`,category:`기타`,color:`#FF5252`,conductivity:1,permeability:5e-11},wood:{id:`wood`,name:`목재 (Wood)`,category:`구조재`,color:`#8D6E63`,conductivity:.13,permeability:4e-12},concrete:{id:`concrete`,name:`콘크리트 (Concrete)`,category:`구조재`,color:`#757575`,conductivity:1.6,permeability:2e-12},brick:{id:`brick`,name:`시멘트/조적 벽돌 (Brick)`,category:`구조재`,color:`#A1887F`,conductivity:.8,permeability:12e-12},alc:{id:`alc`,name:`ALC 블럭 (ALC)`,category:`구조재`,color:`#BDBDBD`,conductivity:.1,permeability:25e-12},steel:{id:`steel`,name:`일반 스틸 (Steel)`,category:`구조재/금속`,color:`#455A64`,conductivity:50,permeability:0},sts:{id:`sts`,name:`스테인리스 스틸 (STS)`,category:`구조재/금속`,color:`#B0BEC5`,conductivity:15,permeability:0},alumStruct:{id:`alumStruct`,name:`구조용 알루미늄 (Alum)`,category:`구조재/금속`,color:`#CFD8DC`,conductivity:200,permeability:0},eps:{id:`eps`,name:`비드법 보온판 (EPS)`,category:`단열재`,color:`#FFF59D`,conductivity:.034,permeability:4e-12},xps:{id:`xps`,name:`압출법 보온판 (XPS)`,category:`단열재`,color:`#FFCC80`,conductivity:.028,permeability:15e-13},glasswool:{id:`glasswool`,name:`그라스울 (Glass Wool)`,category:`단열재`,color:`#F48FB1`,conductivity:.036,permeability:15e-11},rockwool:{id:`rockwool`,name:`암면 (Rock Wool)`,category:`단열재`,color:`#A1887F`,conductivity:.038,permeability:15e-11},mineralwool:{id:`mineralwool`,name:`미네랄울 (Mineral Wool)`,category:`단열재`,color:`#D7CCC8`,conductivity:.042,permeability:15e-11},pfBoard:{id:`pfBoard`,name:`PF 보드 (PF Board)`,category:`단열재`,color:`#EF9A9A`,conductivity:.02,permeability:5e-12},purFoam:{id:`purFoam`,name:`PUR/PIR 폼 (PUR)`,category:`단열재`,color:`#FFF9C4`,conductivity:.024,permeability:4e-12},reflectiveInsul:{id:`reflectiveInsul`,name:`열반사 단열재 (Radiant)`,category:`단열재`,color:`#EEEEEE`,conductivity:.04,permeability:0},cellulose:{id:`cellulose`,name:`셀룰로오스 (Cellulose)`,category:`단열재`,color:`#C5E1A5`,conductivity:.038,permeability:1e-10},stoneGranite:{id:`stoneGranite`,name:`화강석 (Granite)`,category:`석재/타일/마감`,color:`#9E9E9E`,conductivity:3,permeability:4e-13},stoneMarble:{id:`stoneMarble`,name:`대리석 (Marble)`,category:`석재/타일/마감`,color:`#FAFAFA`,conductivity:2.5,permeability:5e-13},tile:{id:`tile`,name:`자기질 타일 (Tile)`,category:`석재/타일/마감`,color:`#607D8B`,conductivity:1.3,permeability:0},mortar:{id:`mortar`,name:`시멘트 모르타르 (Mortar)`,category:`석재/타일/마감`,color:`#9E9E9E`,conductivity:1.2,permeability:1e-11},gypsum:{id:`gypsum`,name:`석고보드 (Gypsum Board)`,category:`석재/타일/마감`,color:`#F5F5F5`,conductivity:.18,permeability:2e-11},plywood:{id:`plywood`,name:`합판/OSB (Plywood)`,category:`석재/타일/마감`,color:`#D7CCC8`,conductivity:.12,permeability:25e-13},vaporBarrier:{id:`vaporBarrier`,name:`방습층 (Vapor Barrier)`,category:`기밀/투습/방수`,color:`#1565C0`,conductivity:.33,permeability:0},airBarrier:{id:`airBarrier`,name:`투습방수지 (House Wrap)`,category:`기밀/투습/방수`,color:`#4DB6AC`,conductivity:.2,permeability:13e-12},epdm:{id:`epdm`,name:`EPDM/시트방수`,category:`기밀/투습/방수`,color:`#212121`,conductivity:.17,permeability:1e-14},glass:{id:`glass`,name:`일반 유리 (Clear Glass)`,category:`창호/유리`,color:`#B3E5FC`,conductivity:1,permeability:0},loweGlass:{id:`loweGlass`,name:`로이 유리 (Low-E Glass)`,category:`창호/유리`,color:`#81D4FA`,conductivity:.8,permeability:0},argonGas:{id:`argonGas`,name:`아르곤 가스 (Argon)`,category:`창호/유리`,color:`#E0F2F1`,conductivity:.016,permeability:195e-12},stdSpacer:{id:`stdSpacer`,name:`알루미늄 간봉 (Spacer)`,category:`창호/부속`,color:`#90A4AE`,conductivity:160,permeability:0},insulSpacer:{id:`insulSpacer`,name:`단열 간봉 (Warm Edge)`,category:`창호/부속`,color:`#5D4037`,conductivity:.2,permeability:1e-16},pvcFrame:{id:`pvcFrame`,name:`PVC 창틀 (PVC Frame)`,category:`창호/부속`,color:`#4DD0E1`,conductivity:.17,permeability:2e-14},alumFrame:{id:`alumFrame`,name:`알루미늄 창틀 (Alum Frame)`,category:`창호/부속`,color:`#CFD8DC`,conductivity:160,permeability:0}};function t(e){return e>=0?610.5*Math.exp(17.269*e/(237.3+e)):610.5*Math.exp(21.875*e/(265.5+e))}function n(e,t){return e===0||t===0?0:2*e*t/(e+t)}let r=1e-5;function i(e,t,r,i){let a=e===`air`,o=t===`air`;return a&&o?5e3:a===o?n(r,i):.0225}let a=1e-15;function o(e,t,i,o){let s=e===`air`,c=t===`air`,l=i<a?0:i,u=o<a?0:o;return s&&c?r:s===c?n(l,u):n(s?r:l,c?r:u)}function s(n,r,a,s){let c=0,l=0,u=t(s.T_in)*(s.RH_in/100),d=t(s.T_out)*(s.RH_out/100);for(let t=0;t<a;t++)for(let f=0;f<r;f++){let p=n[t][f],m=e[p.material],h=p.T,g=p.P;if(f===0){p.T=s.T_in,p.P=u;continue}else if(f===r-1){p.T=s.T_out,p.P=d;continue}let _=0,v=0,y=0,b=0,x=n[t][f-1].material,S=e[x],C=i(p.material,x,m.conductivity,S.conductivity),w=o(p.material,x,m.permeability,S.permeability);_+=C*n[t][f-1].T,y+=C,v+=w*n[t][f-1].P,b+=w;let T=n[t][f+1].material,E=e[T],D=i(p.material,T,m.conductivity,E.conductivity),O=o(p.material,T,m.permeability,E.permeability);if(_+=D*n[t][f+1].T,y+=D,v+=O*n[t][f+1].P,b+=O,t>0){let r=n[t-1][f].material,a=e[r],s=i(p.material,r,m.conductivity,a.conductivity),c=o(p.material,r,m.permeability,a.permeability);_+=s*n[t-1][f].T,y+=s,v+=c*n[t-1][f].P,b+=c}if(t<a-1){let r=n[t+1][f].material,a=e[r],s=i(p.material,r,m.conductivity,a.conductivity),c=o(p.material,r,m.permeability,a.permeability);_+=s*n[t+1][f].T,y+=s,v+=c*n[t+1][f].P,b+=c}if(y>0){let e=_/y;p.T+=.8*(e-p.T)}if(b>0){let e=v/b;p.P+=.8*(e-p.P)}c=Math.max(c,Math.abs(p.T-h)),l=Math.max(l,Math.abs(p.P-g))}return{maxDeltaT:c,maxDeltaP:l}}function c(e,t,n,r,i){let a={maxDeltaT:0,maxDeltaP:0};for(let o=0;o<i;o++)a=s(e,t,n,r);return a}var l=`struct Config {\r
    width: u32,\r
    height: u32,\r
    T_in: f32,\r
    RH_in: f32,\r
    T_out: f32,\r
    RH_out: f32,\r
    P_in: f32,\r
    P_out: f32,\r
    cellSize: f32,\r
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
const AIR_EFFECTIVE_K: f32 = 5000.0;\r
const AIR_EFFECTIVE_PERM: f32 = 1e-5;\r
const SURFACE_FILM_K: f32 = 0.0225;\r
const VAPOR_PROOF_LIMIT: f32 = 1e-15;\r
\r
fn get_effective_coef_t(matIdxA: u32, matIdxB: u32) -> f32 {\r
    let pA = matProps[matIdxA];\r
    let pB = matProps[matIdxB];\r
    let isAirA = pA.isAir > 0.5;\r
    let isAirB = pB.isAir > 0.5;\r
\r
    if (isAirA && isAirB) { return AIR_EFFECTIVE_K; }\r
    if (isAirA != isAirB) { return SURFACE_FILM_K; }\r
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
            let cT = get_effective_coef_t(matIdx, nMatIdx);\r
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
        // Faster and normalized relaxation for all materials\r
        tempWrite[idx] = currentT + 0.8 * (targetT - currentT);\r
    } else {\r
        tempWrite[idx] = currentT;\r
    }\r
\r
    let currentP = pressRead[idx];\r
    if (sumCoefP > 0.0) {\r
        let targetP = sumP / sumCoefP;\r
        pressWrite[idx] = currentP + 0.8 * (targetP - currentP);\r
    } else {\r
        pressWrite[idx] = currentP;\r
    }\r
}\r
`,u=class{device=null;pipeline=null;width;height;configBuffer=null;materialBuffer=null;matPropsBuffer=null;tempBuffers=null;pressBuffers=null;commonBindGroup=null;bindGroups=null;iteration=0;materialIds;constructor(t,n){this.width=t,this.height=n,this.materialIds=Object.keys(e)}async init(){if(!navigator.gpu)throw Error(`WebGPU not supported`);let e=await navigator.gpu.requestAdapter();if(!e)throw Error(`No adapter found`);this.device=await e.requestDevice();let t=this.device.createShaderModule({code:l});this.pipeline=this.device.createComputePipeline({layout:`auto`,compute:{module:t,entryPoint:`main`}}),this.setupBuffers()}setupBuffers(){if(!this.device)return;let t=this.width*this.height;this.configBuffer=this.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.materialBuffer=this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.matPropsBuffer=this.device.createBuffer({size:this.materialIds.length*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let n=new Float32Array(this.materialIds.length*4);this.materialIds.forEach((t,r)=>{let i=e[t];n[r*4+0]=i.conductivity,n[r*4+1]=i.permeability,n[r*4+2]=t===`air`?1:0}),this.device.queue.writeBuffer(this.matPropsBuffer,0,n),this.tempBuffers=[this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})],this.pressBuffers=[this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.device.createBuffer({size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST})],this.commonBindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.configBuffer}},{binding:1,resource:{buffer:this.materialBuffer}},{binding:2,resource:{buffer:this.matPropsBuffer}}]}),this.bindGroups=[this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.tempBuffers[0]}},{binding:1,resource:{buffer:this.tempBuffers[1]}},{binding:2,resource:{buffer:this.pressBuffers[0]}},{binding:3,resource:{buffer:this.pressBuffers[1]}}]}),this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:this.tempBuffers[1]}},{binding:1,resource:{buffer:this.tempBuffers[0]}},{binding:2,resource:{buffer:this.pressBuffers[1]}},{binding:3,resource:{buffer:this.pressBuffers[0]}}]})]}updateData(e,n){if(!this.device||!this.configBuffer||!this.materialBuffer)return;let r=this.width*this.height,i=new Uint32Array(r),a=new Float32Array(r),o=new Float32Array(r);for(let t=0;t<this.height;t++)for(let n=0;n<this.width;n++){let r=t*this.width+n,s=e[t][n];i[r]=this.materialIds.indexOf(s.material),a[r]=s.T,o[r]=s.P}let s=t(n.T_in)*(n.RH_in/100),c=t(n.T_out)*(n.RH_out/100),l=new Float32Array(16),u=new Uint32Array(l.buffer);u[0]=this.width,u[1]=this.height,l[2]=n.T_in,l[3]=n.RH_in,l[4]=n.T_out,l[5]=n.RH_out,l[6]=s,l[7]=c,l[8]=.0025,this.device.queue.writeBuffer(this.configBuffer,0,l),this.device.queue.writeBuffer(this.materialBuffer,0,i),this.device.queue.writeBuffer(this.tempBuffers[0],0,a),this.device.queue.writeBuffer(this.tempBuffers[1],0,a),this.device.queue.writeBuffer(this.pressBuffers[0],0,o),this.device.queue.writeBuffer(this.pressBuffers[1],0,o),this.iteration=0}async run(e){if(!this.device||!this.pipeline||!this.bindGroups)throw Error(`Not initialized`);let t=this.device.createCommandEncoder();for(let n=0;n<e;n++){let e=t.beginComputePass();e.setPipeline(this.pipeline),e.setBindGroup(0,this.commonBindGroup),e.setBindGroup(1,this.bindGroups[this.iteration%2]),e.dispatchWorkgroups(Math.ceil(this.width/16),Math.ceil(this.height/16)),e.end(),this.iteration++}this.device.queue.submit([t.finish()]);let n=this.iteration%2,r=this.iteration%2,i=this.device.createBuffer({size:this.width*this.height*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),a=this.device.createBuffer({size:this.width*this.height*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),o=this.device.createCommandEncoder();o.copyBufferToBuffer(this.tempBuffers[n],0,i,0,this.width*this.height*4),o.copyBufferToBuffer(this.pressBuffers[r],0,a,0,this.width*this.height*4),this.device.queue.submit([o.finish()]),await Promise.all([i.mapAsync(GPUMapMode.READ),a.mapAsync(GPUMapMode.READ)]);let s=new Float32Array(i.getMappedRange().slice(0)),c=new Float32Array(a.getMappedRange().slice(0));return i.unmap(),a.unmap(),i.destroy(),a.destroy(),{tempData:s,pressData:c}}destroy(){this.device&&=(this.configBuffer?.destroy(),this.materialBuffer?.destroy(),this.matPropsBuffer?.destroy(),this.tempBuffers&&(this.tempBuffers[0].destroy(),this.tempBuffers[1].destroy()),this.pressBuffers&&(this.pressBuffers[0].destroy(),this.pressBuffers[1].destroy()),this.device.destroy(),null)}};let d=null,f=!1,p=!1,m=!1,h=0,g=0,_=[],v={T_in:20,RH_in:50,T_out:-5,RH_out:80},y=!1;async function b(){if(!(!p||y)){try{if(f&&d){m||=(d.updateData(_,v),!0);let{tempData:e,pressData:t}=await d.run(250);if(p){let n=0,r=0;for(let i=0;i<h*g;i++){let a=Math.floor(i/h),o=i%h;n=Math.max(n,Math.abs(e[i]-_[a][o].T)),r=Math.max(r,Math.abs(t[i]-_[a][o].P)),_[a][o].T=e[i],_[a][o].P=t[i]}n<1e-5&&r<.5&&(p=!1,self.postMessage({type:`STOPPED`}));let i=e.slice(0).buffer,a=t.slice(0).buffer;y=!0,self.postMessage({type:`SYNC_DATA`,payload:{tempData:new Float32Array(i),pressData:new Float32Array(a),steps:250,residT:n,residP:r}},[i,a])}}else if(p){let e=c(_,h,g,v,50),t=h*g,n=new Float32Array(t),r=new Float32Array(t);for(let e=0;e<g;e++)for(let t=0;t<h;t++){let i=e*h+t;n[i]=_[e][t].T,r[i]=_[e][t].P}e.maxDeltaT<1e-5&&e.maxDeltaP<.5&&(p=!1,self.postMessage({type:`STOPPED`}));let i=n.buffer,a=r.buffer;y=!0,self.postMessage({type:`SYNC_DATA`,payload:{tempData:new Float32Array(i),pressData:new Float32Array(a),steps:50,residT:e.maxDeltaT,residP:e.maxDeltaP}},[i,a])}}catch(e){console.error(`Worker simulation error:`,e),p=!1,self.postMessage({type:`ERROR`,payload:e.message})}p&&!y&&setTimeout(b,0)}}self.onmessage=async e=>{let{type:t,payload:n}=e.data;switch(t){case`ACK`:y=!1,p&&b();break;case`INIT`:h=n.width,g=n.height;try{d=new u(h,g),await d.init(),f=!0,self.postMessage({type:`STATUS`,payload:{useGpu:!0,message:`WebGPU Initialized`}})}catch(e){console.warn(`WebGPU init failed in worker:`,e),f=!1,self.postMessage({type:`STATUS`,payload:{useGpu:!1,message:`Fallback to JS Mode`}})}break;case`UPDATE_STATE`:_=n.grid,v=n.boundaries,m=!1;break;case`START`:p||(p=!0,b());break;case`STOP`:p=!1;break;case`RESET`:p=!1,m=!1,y=!1;for(let e=0;e<g;e++)for(let t=0;t<h;t++)_[e][t].T=20,_[e][t].P=0;d&&(d.updateData(_,v),m=!0);break;case`DESTROY`:p=!1,d&&=(d.destroy(),null),self.close();break}}})();