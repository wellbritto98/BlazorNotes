using Newtonsoft.Json;

namespace Models.Models.Home
{
    public class RootObject
    {
        [JsonProperty("documents")] public List<Document> Documents { get; set; } = new List<Document>();
    }
}
