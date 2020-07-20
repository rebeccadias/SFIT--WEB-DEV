# Generated by Django 2.2 on 2020-07-13 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactForm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(blank=True, max_length=200)),
                ('email_id', models.CharField(blank=True, max_length=200)),
                ('contact_no', models.CharField(blank=True, max_length=200)),
                ('message', models.TextField(blank=True, max_length=200)),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': 'Contact Form Data',
                'verbose_name': 'Contact Form',
            },
        ),
    ]