var url = new URL('https://janus-dot-hackathon-313211.uc.r.appspot.com/applications')
        var params = {email : localStorage.getItem("janus-email")}
        url.search = new URLSearchParams(params).toString();
        fetch(url).then(async function(res){ 
        // alert(res.status);
        if(res.status === 200) {
          var data = await res.json();
          console.log(data);
          var tableBody = document.getElementById('table-body');
          var index = 0;
          data.forEach(application => {
            var tr = document.createElement('tr');
            tr.innerHTML = `
              <th scope="row">${index+1}</th>
              <td>${application.title}</td>
              <td>${application.company}</td>
              <td>${application.location}</td>
              <td><a href="${application.link}">${application.link}</a></td>
              <td>${application.status}</td>
              <td><i class="fa fa-trash fa-2x" aria-hidden="true" style="color: red;"></i>
              </td>
            `;
            tableBody.appendChild(tr);
            index++;
          });
        }
      })
      // .then(function(resultdata){ alert( JSON.stringify( resultdata ) ) })
      .catch(function(err){
        alert("error "+err) 
      });