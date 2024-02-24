using Newtonsoft.Json;

namespace Models.Models.Home
{
    public class NoteList
    {
        public List<NoteModel> Notes { get; set; } = new List<NoteModel>(); // Inicializando para evitar NullReferenceException
    }
}
