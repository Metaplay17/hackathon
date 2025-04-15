using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace api.Controllers
{
    [ApiController]
    [Route("Lists")]
    public class ListsController : ControllerBase
    {
        private Logic logic;
        public ListsController(Logic logic)
        {
            this.logic = logic;
        }

        [HttpGet("{direction}/result")]
        public IActionResult GetDirectionResult(string direction)
        {
            string[] JsonApplicants = logic.GetDirectionResult(direction);
            return Ok(JsonSerializer.Serialize(JsonApplicants));
        }

    }
}
