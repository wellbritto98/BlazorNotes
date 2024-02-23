using Newtonsoft.Json;

namespace BlazorNotes.Models.Home
{
    public class StringValue
    {
        [JsonProperty("stringValue")]
        public string Value { get; set; }
    }
}
