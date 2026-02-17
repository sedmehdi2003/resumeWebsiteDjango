from django.test import TestCase
from django.urls import reverse


class CorePageTests(TestCase):
    def test_core_page_returns_success(self):
        response = self.client.get(reverse("core"))
        self.assertEqual(response.status_code, 200)

    def test_core_page_uses_index_template(self):
        response = self.client.get(reverse("core"))
        self.assertTemplateUsed(response, "index.html")
