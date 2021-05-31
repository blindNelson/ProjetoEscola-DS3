using System.ComponentModel.DataAnnotations;

namespace ProjetoEscola_API.Models
{
    public class Aluno
    {
        /**/

        public int Id { get; set; }

        /**/

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [Range(10000, 99999)]

        public string RA { get; set; }
        /**/

        [Required(ErrorMessage = "Este campo é obrigatório")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 30 caracteres")]
        [MaxLength(30, ErrorMessage = "Este campo deve conter entre 3 e 30 caracteres")]
        public string Nome { get; set; }

        /**/
        [Required(ErrorMessage = "Este campo é obrigatório")]

        [Range(10, 99)]

        public int codCurso { get; set; }
        /**/
    }
}