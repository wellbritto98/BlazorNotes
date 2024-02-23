using Newtonsoft.Json;

namespace BlazorNotesMobile.Models.Home
{
    public class StringValue
    {
        [JsonProperty("stringValue")]
        public string Value { get; set; }
    }
}
