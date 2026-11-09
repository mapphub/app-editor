(function(){
  try{ MiniApps.shell&&MiniApps.shell('setChrome',{topBar:false,bottomBar:false}); }catch(e){}
  const log=m=>document.getElementById('log').textContent=m;
  document.getElementById('load').onclick=async()=>{
    const path=document.getElementById('path').value.trim();
    const r=await MiniApps.fs('read',{path});
    document.getElementById('body').value=(r&&r.content)||'';
    log('loaded '+path);
  };
  document.getElementById('save').onclick=async()=>{
    const path=document.getElementById('path').value.trim();
    await MiniApps.fs('write',{path,content:document.getElementById('body').value});
    log('saved '+path);
  };
})();
