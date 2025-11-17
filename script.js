    // Small interactive bits to impress
    function submitProposal(e){
      e.preventDefault();
      const status = document.getElementById('proposal-status');
      status.textContent = 'Thanks — your request has been received. A sales specialist will contact you within one business day.';
      // For demo only: show example payload in console
      console.log({name:document.getElementById('name').value,company:document.getElementById('company').value,message:document.getElementById('message').value});
      // Clear form (visual)
      e.target.reset();
    }

    // small animated KPI number 
    document.addEventListener('DOMContentLoaded', ()=>{
      const el = document.querySelector('.stat .kpi');
      // no heavy math, just micro flourish — keep accessible
    });
    