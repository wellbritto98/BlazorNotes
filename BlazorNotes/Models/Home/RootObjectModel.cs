using Newtonsoft.Json;

namespace BlazorNotes.Models.Home
{
    public class RootObject
    {
        [JsonProperty("documents")]
        public List<Document> Documents { get; set; }
    }
}
