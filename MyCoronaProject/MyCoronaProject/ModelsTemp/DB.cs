//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace MyCoronaProject.Models
//{
//    public class DB
//    {
//        public static List<Patients> listPatients = new List<Patients>();
//        public static List<Vaccination> listVaccination = new List<Vaccination>();
//        public static List<Corona> listCorona = new List<Corona>();

//        static DB()
//        {
//            listPatients.Add(new Patients() { Id = "000000000", Name = "miri",
//                LastName = "g",
//                Phone = "03695",
//                CellPhone = "12354",
//                City = "Elad",
//                number = 77,
//                Street = "יהודה הנשיא",
//                DateOfBirth = new DateTime(17/10/2020)
//                 });

//            listPatients.Add(new Patients()
//            {
//                Id = "111111",
//                Name = "Racheli",
//                LastName = "gefner",
//                Phone = "03695",
//                CellPhone = "12354",
//                City="Elad",
//                number=28,
//                Street="Rashi",
//                DateOfBirth = new DateTime(29 / 07 / 2022)
//            });
            
            
//            listCorona.Add(new Corona()
//            {
//                Id = "000000000",
//            BecameIll=new DateTime(10/10/1010),
//            Recovery= new DateTime(10 / 10 / 1010),
//            });
//            listVaccination.Add(new Vaccination()
//            {
//                Id = "000000000",
//                GetVaccinated = new DateTime(10 / 10 / 1010),
//                manufacturer = "moderna",
//            });
//            listVaccination.Add(new Vaccination()
//            {
//                Id = "000000000",
//                GetVaccinated = new DateTime(20 / 10 / 1020),
//                manufacturer = "moderna",
//            });


//        }
//    }
//}