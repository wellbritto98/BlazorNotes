using Microsoft.AspNetCore.Components;
using Newtonsoft.Json;

namespace BlazorNotesMobile.Models.Home
{
    public class NoteList
    {
        public List<NoteModel> Notes { get; set; } = new List<NoteModel>(); // Inicializando para evitar NullReferenceException
    }
}
