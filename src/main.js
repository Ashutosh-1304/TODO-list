
        const addButtonRef=document.getElementById('addBtn');
        const taskRef=document.getElementById('task');
        const taskListRef=document.getElementById('taskList');
       // const bodyRef=document.getElementsByTagName('body')[0];
       // tag name array deta hai thus [0] lagana padta hai
        const bodyRef=document.body
        addButtonRef.addEventListener('click',function() {
            const value = taskRef.value.trim();
            if (value === '') return;
            const li=document.createElement('li');
            li.innerText=value;
            taskListRef.appendChild(li);
            taskRef.value='';
            li.addEventListener('click',function(){
                li.remove();
            })
        }) //kisi bhi scenario mein mujhe eventlistener remove nhi karna thus writing direct function nhi toh kahi aur function banata
        // const darkLightBtnRef=document.getElementById('darkLightBtn');
        // let isDark=0; 
        // darkLightBtnRef.addEventListener('click',function(){
        //     if(isDark==0){
        //         isDark=1-isDark;
        //         bodyRef.style.backgroundColor='black';
        //         bodyRef.style.color='white'
        //         const items = taskListRef.querySelectorAll('li');
        //         items.forEach(li => {
        //             li.style.backgroundColor = '#333';
        //             li.style.color = 'white';
        //         });
        //     }
        //     else
        //     {
        //         isDark=1-isDark;
        //         bodyRef.style.backgroundColor='white';
        //         bodyRef.style.color='black';
        //         const items = taskListRef.querySelectorAll('li');
        //         items.forEach(li => {
        //             li.style.backgroundColor = '#f4f4f4';
        //             li.style.color = 'black';
        //         });
        //     }
        // })