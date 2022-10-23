using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data;
using System.Data.SqlClient;
using System;
using System.Data.Entity;


namespace MyCoronaProject.Controllers
{
    [EnableCors(origins: "*", methods: "*", headers: "*")]

    [RoutePrefix("Patients")]


    public class PatientsController : ApiController
    {
        //הצגת כל חברי הקופה
        [HttpGet]
        [Route("allPatients")]
        public List<Patients> GetAllPatients()
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                //return CoronaDB.Patients.Where(item=>!string.IsNullOrEmpty(item.Name)).ToList();
                return CoronaDB.Patients.ToList();
            }
        }
        [HttpPost]

        [Route("MyCorona")]
        public Corona MyCorona(Patients c)
        {
            try
            {
                using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
                { Corona gc = CoronaDB.Corona.FirstOrDefault(t => t.Id.Equals(c.Id));
                    return gc;
                }
            }
            catch
            {
                return null;
            }
        }

        [HttpPost]
        [Route("MyVaccition")]
        public List<Vaccination> MyVaccition(Patients p)
        {
            try
            {
                using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
                {
                    return CoronaDB.Vaccination.Where(t => t.Id.Equals(p.Id)).ToList();
                }
            }
            catch
            {
                return null;
            }
        }

        //הוספת חבר קופה

        [HttpPost]
        [Route("addPatient")]
        // Vaccination = new List<Vaccination>{Id=u.Id,GetVaccinated=v.GetVaccinated,manufacturer=v.manufacturer}) 
        public int addNewPatient(Patients u)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                var not = CoronaDB.Patients.Where(no => no.Id.Equals(u.Id));

                if (not.Count() == 0)
                {
                    try {
                        CoronaDB.Patients.Add(u);
                        CoronaDB.SaveChanges();
                        return 1;
                    }
                    catch
                    {
                        return 0;
                    }

                    //CoronaDB.Patients.Add(new Patients()
                    //{
                    //    Name = u.Name,
                    //    LastName = u.LastName,
                    //    Phone = u.Phone,
                    //    CellPhone = u.CellPhone,
                    //    DateOfBirth = u.DateOfBirth,
                    //    Id = u.Id,
                    //    City = u.City,
                    //    Number = u.Number,
                    //    Street = u.Street,
                    //});

                }
                else return 0;
            }
        }

        [HttpPost]
        [Route("addCorona")]
        // Vaccination = new List<Vaccination>{Id=u.Id,GetVaccinated=v.GetVaccinated,manufacturer=v.manufacturer}) 
        public int addNewCorona(Corona u)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                var not = CoronaDB.Corona.Where(no => no.Id.Equals(u.Id));

                if (not.Count() == 0)
                {
                    try
                    {
                        CoronaDB.Corona.Add(u);
                        CoronaDB.SaveChanges();
                        return 1;
                    }
                    catch
                    {
                        return 0;
                    }

                }
                else return 0;
            }
        }
        [HttpPost]
        [Route("addVaccination")]
        public int addNewVaccination(Vaccination u)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                //var not = CoronaDB.Vaccination.Where(no => no.Id.Equals(u.Id));

                //if (not.Count() == 0)
                {
                    try
                    {
                        CoronaDB.Vaccination.Add(u);
                        CoronaDB.SaveChanges();
                        return 1;
                    }
                    catch
                    {
                        return 0;
                    }




                }

            }
        }
        //  עריכת פרטי לקוח
        [HttpPost]
        [Route("change")]
        public void change(Patients p)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                if (p != null)
                {
                    CoronaDB.Patients.Remove((Patients)CoronaDB.Patients.FirstOrDefault(t => t.Id.Equals(p.Id)));
                    CoronaDB.SaveChanges();
                    CoronaDB.Patients.Add(p);
                    CoronaDB.SaveChanges();                    //SqlCommand cmd = new SqlCommand("delete from Patients where Id=@p.Id ");
                    //CoronaDB.Patients.Add(p);
                    //CoronaDB.SaveChanges();
                    //var i = 0;
                    //for (i = 0; CoronaDB.Patients.id != p.Id; i++) ;
                    //CoronaDB.Patients[i] = p;

                    //CoronaDB.Patients.Where(no => no.Id.Equals(p.Id));
                }

            }
        }

        //  עריכת פרטי לקוח
        [HttpPost]
        [Route("changeCorona")]
        public void changeCorona(Corona c)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                if (c.BecameIll != null|| c.Recovery != null)
                {
                    CoronaDB.Corona.Remove((Corona)CoronaDB.Corona.FirstOrDefault(t => t.Id.Equals(c.Id)));
                    CoronaDB.SaveChanges();
                    CoronaDB.Corona.Add(c);
                    CoronaDB.SaveChanges();
                    //CoronaDB.Corona.Add(p);
                    //CoronaDB.SaveChanges();
                    //var i = 0;
                    //for (i = 0; CoronaDB.Patients.id != p.Id; i++) ;
                    //CoronaDB.Patients[i] = p;

                    //CoronaDB.Patients.Where(no => no.Id.Equals(p.Id));
                }

            }
        }

        [HttpPost]
        [Route("changeVaccination")]
        public void changeVaccination(Vaccination c)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                if (c != null)
                {
                    try {CoronaDB.Vaccination.Remove((Vaccination)CoronaDB.Vaccination.FirstOrDefault(t => t.Id.Equals(c.Id)));
                    CoronaDB.SaveChanges(); }
                    catch
                    {
                        throw;
                    }
                    finally { CoronaDB.Vaccination.Add(c);
                    CoronaDB.SaveChanges();}
                    
                    //var i = 0;
                    //for (i = 0; CoronaDB.Patients.id != p.Id; i++) ;
                    //CoronaDB.Patients[i] = p;

                    //CoronaDB.Patients.Where(no => no.Id.Equals(p.Id));
                }

            }
        }
        //מחיקת  לקוח
        [HttpPost]
        [Route("delete")]
        public void delete(Patients Id)
        {
            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                //SqlCommand cmd2 = new SqlCommand("delete from Patients where Id=@p.Id ");

                CoronaDB.Patients.Remove((Patients)CoronaDB.Patients.FirstOrDefault(t=> t.Id.Equals(Id.Id)));
                CoronaDB.SaveChanges();


            }
        }
        [HttpPost]
        [Route("deleteC")]
        public void deleteC(Patients Id)
        {

            using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                try
                {
                    CoronaDB.Corona.Remove((Corona)CoronaDB.Corona.FirstOrDefault(t => t.Id.Equals(Id.Id)));
                    CoronaDB.SaveChanges(); }
                catch (Exception e) { throw e; }


            }

        }
    
    [HttpPost]
    [Route("deleteV")]
    public void deleteV(Patients Id)
    {
        using (CoronaDBEntities CoronaDB = new CoronaDBEntities())
            {
                try {
                    var count = CoronaDB.Vaccination.Count(t => t.Id.Equals(Id.Id));
                    for(int i = 0; i < count; i++) {  CoronaDB.Vaccination.Remove((Vaccination)CoronaDB.Vaccination.FirstOrDefault(t => t.Id.Equals(Id.Id)));
                    CoronaDB.SaveChanges(); }
                  
                } catch(Exception e)
                {
                    throw e;
                }



        }
    } }}
        //        //פרטי לקוח בודד
        //        [HttpPost]
        //        [Route("detail")]
        //        public Patients detailPatient(Patients p)
        //        {

        //            //var det = new Patients();
        //            var det = coro.listPatients.Where(code => code.Id.Equals(p.Id));
        //            var det1 = DB.listCorona.Where(code1 => code1.Id.Equals(p.Id));
        //            var det2 = DB.listVaccination.Where(code2 => code2.Id.Equals(p.Id));
        //            Patients patient = (Patients)det;
        //            Corona corona = (Corona)det1;
        //            Vaccination Vaccination = (Vaccination)det2;

        //            Patients allDetails = new Patients()
        //            {
        //                Name = patient.Name,
        //                LastName = patient.LastName,
        //                Phone = patient.Phone,
        //                CellPhone = patient.CellPhone,
        //                DateOfBirth = patient.DateOfBirth,
        //                Id = patient.Id,
        //                City = patient.City,
        //                Number = patient.Number,
        //                Street = patient.Street,

        //            };
        //            return allDetails;
        //        }
        //        //פרטי קורונה
        //        [HttpPost]
        //        [Route("detailCorona")]
        //        public object detailCorona(Patients p)
        //        {
        //            using (CoronaDBEntities2 CoronaDB = new CoronaDBEntities2())
        //            {


        //                var det1 = CoronaDB.Corona.Where(code1 => code1.Id.Equals(p.Id));

        //                Corona corona = (Corona)det1;

        //                Corona coronaDetails = new Corona()
        //                {
        //                    Id = p.Id,
        //                    BecameIll = corona.BecameIll,
        //                    Recovery = corona.Recovery
        //                };


        //                return coronaDetails;
        //            }
        //        }

        //    }
        //}
    
