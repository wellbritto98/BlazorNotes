using Newtonsoft.Json;

namespace BlazorNotesMobile.Models.Home
{
    public class RootObject
    {
        [JsonProperty("documents")] public List<Document> Documents { get; set; } = new List<Document>();
    }
}
