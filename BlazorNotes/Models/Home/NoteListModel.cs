using Newtonsoft.Json;

namespace BlazorNotes.Models.Home
{
    public class NoteList
    {
        public List<NoteModel> Notes { get; set; } = new List<NoteModel>(); // Inicializando para evitar NullReferenceException
    }
}
