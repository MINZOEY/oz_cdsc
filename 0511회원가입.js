
        function signUpCheck() {
            let email = document.querySelector("#user_email").value
                console.log(email)
            let id = document. querySelector("#user_id").value
                console.log(id)
            let pw1 = document.querySelector("#user_pw1").value
                console.log(pw1)
            let pw2 = document.querySelector("#user_pw2").value
                console.log(pw2)
            let phone1 = document.querySelector("#phone1").value
                console.log(phone1)
            let phone2 = document.querySelector("#phone2").value
                console.log(phone2)
            let phone3 = document.querySelector("#phone3").value
                console.log(phone3)
            let certificationNumber = document.querySelector("#certificationNumber").value
                console.log(certificationNumber)
            let timeLimit = document.querySelector("#timeLimit").value
                console.log(timeLimit)
            let city = document.querySelector("#city").value
                console.log(city)
            let gender_female = document.querySelector("#gender_female").checked
                console.log(gender_female)
            let gender_man = document.querySelector("#gender_man").checked
                console.log(gender_man) 
            
            let user_data = {
                email, id, pw1, pw2, phone1, phone2, phone3, certificationNumber, timeLimit, city, gender_female, gender_man
            }
            user_data["email"]=email, 
            user_data["id"]=id,
            user_data["pw1"]= pw1, 
            user_data["pw2"]=pw2, 
            user_data["phone1"]=phone1, 
            user_data["phone2"]=phone2, 
            user_data["phone3"]=phone3, 
            user_data["certificationNumber"]=certificationNumber, 
            user_data["timeLimit"]=timeLimit, 
            user_data["city"]=city, 
            user_data["gender_female"]=gender_female, 
            user_data["gender_man"]=gender_man

            console.log(user_data)
        } 

