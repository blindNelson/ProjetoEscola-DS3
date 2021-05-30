using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ProjetoEscola_API.Data;
using ProjetoEscola_API.Models;

namespace ProjetoEscola_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunoController : Controller
    {
        private readonly EscolaContext  _context;
        public AlunoController(EscolaContext context){
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Aluno>> GetAll(){
            return _context.Aluno.ToList();
        }
    }
}